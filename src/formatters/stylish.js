import _ from 'lodash';

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const indent = ' '.repeat(depth * 4);
  const bracketIndent = indent.slice(0, -4);
  const lines = Object.entries(value).map(([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${bracketIndent}}`;
};

const formatStylish = (diff) => {
  const iter = (currentValue, depth) => {
    const baseIndent = ' '.repeat((depth - 1) * 4);
    const lines = currentValue.flatMap((node) => {
      const {
        type,
        key,
        value,
        valueBefore,
        valueAfter,
        children,
      } = node;
      const currentIndent = `${baseIndent}    `;
      switch (type) {
        case 'nested':
          return `${currentIndent}${key}: ${iter(children, depth + 1)}`;
        case 'added':
          return `${baseIndent}  + ${key}: ${stringify(value, depth + 1)}`;
        case 'deleted':
          return `${baseIndent}  - ${key}: ${stringify(value, depth + 1)}`;
        case 'unchanged':
          return `${currentIndent}${key}: ${stringify(value, depth + 1)}`;
        case 'changed':
          return [
            `${baseIndent}  - ${key}: ${stringify(valueBefore, depth + 1)}`,
            `${baseIndent}  + ${key}: ${stringify(valueAfter, depth + 1)}`];
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });
    return `{\n${lines.join('\n')}\n${baseIndent}}`;
  };

  return iter(diff, 1);
};

export default formatStylish;
