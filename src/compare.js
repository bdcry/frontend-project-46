import _ from 'lodash';
import parseFile from './parser/jsonParser.js';

const compare = (filePath1, filePath2) => {
  const obj1 = parseFile(filePath1);
  const obj2 = parseFile(filePath2);

  // создаем и сортируем массив с уникальными парами ключей
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  // создаем вложенную функцию поиска различий
  const diffs = keys.map((key) => {
    if (!Object.hasOwn(obj1, key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (!Object.hasOwn(obj2, key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (obj1[key] === obj2[key]) {
      return `  ${key}: ${obj1[key]}`;
    }
    return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
  });
  return `{\n${diffs.join('\n')}\n}`;
};

export default compare;
