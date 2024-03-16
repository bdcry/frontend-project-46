import parseFile from './parser/parsers.js';
import chooseFormatter from './formatters/forrmater.js';
import buildTreeDiff from './buildTreeDiff.js';

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const obj1 = parseFile(filePath1);
  const obj2 = parseFile(filePath2);
  const diff = buildTreeDiff(obj1, obj2);
  const formatter = chooseFormatter(format);
  return formatter(diff);
};

export default gendiff;
