import parseFile from './parser/parsers.js';
import formatter from './formatters/index.js';
import buildTreeDiff from './buildTreeDiff.js';

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const obj1 = parseFile(filePath1);
  const obj2 = parseFile(filePath2);
  const diff = buildTreeDiff(obj1, obj2);
  const formatters = formatter(format);
  return formatters(diff);
};

export default gendiff;
