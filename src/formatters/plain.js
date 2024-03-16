import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatPlain = (diff) => {
  const iter = (tree, key = []) => {
    const result = tree.map((node) => {
      const {
        type,
        children,
        value,
        valueBefore,
        valueAfter,
      } = node;
      const keys = [...key, node.key];
      const pathName = keys.join('.');

      switch (type) {
        case 'added':
          return `Property '${pathName}' was added with value: ${stringify(value)}`;
        case 'deleted':
          return `Property '${pathName}' was removed`;
        case 'unchanged':
          return null;
        case 'changed':
          return `Property '${pathName}' was updated. From ${stringify(valueBefore)} to ${stringify(valueAfter)}`;
        case 'nodes':
        case 'nested':
          return iter(children, keys);
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });
    return result.filter(Boolean).join('\n');
  };
  return iter(diff, []);
};

export default formatPlain;
