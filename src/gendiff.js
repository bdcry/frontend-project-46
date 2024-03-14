import _ from 'lodash';
import parseFile from './parser/parsers.js';

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indent = ' '.repeat(depth * 4);
  const lines = Object.entries(value).map(([key, val]) => `${indent}    ${key}: ${formatValue(val, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${indent}}`;
};

const gendiff = (filePath1, filePath2) => {
  const obj1 = parseFile(filePath1);
  const obj2 = parseFile(filePath2);

  // создаем вложенную функцию поиска различий
  const iter = (currentObj1, currentObj2, depth) => {
    // создаем и сортируем массив с уникальными парами ключей
    const keys = _.sortBy(_.union(Object.keys(currentObj1), Object.keys(currentObj2)));
    const indent = ' '.repeat(depth * 4 - 2);
    const diffs = keys.map((key) => {
      if (!_.has(currentObj2, key)) {
        return `${indent}- ${key}: ${formatValue(currentObj1[key], depth)}`;
      }
      if (!_.has(currentObj1, key)) {
        return `${indent}+ ${key}: ${formatValue(currentObj2[key], depth)}`;
      }
      if (_.isObject(currentObj1[key]) && _.isObject(currentObj2[key])) {
        return `${indent}  ${key}: {\n${iter(currentObj1[key], currentObj2[key], depth + 1)}\n${indent}  }`;
      }
      if (!_.isEqual(currentObj1[key], currentObj2[key])) {
        return `${indent}- ${key}: ${formatValue(currentObj1[key], depth)}\n${indent}+ ${key}: ${formatValue(currentObj2[key], depth)}`;
      }
      return `${indent}  ${key}: ${formatValue(currentObj1[key], depth)}`;
    });
    return diffs.join('\n');
  };

  return `\n{\n${iter(obj1, obj2, 1)}\n}`;
};

export default gendiff;
