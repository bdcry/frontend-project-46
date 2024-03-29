import fs from 'fs';
import path from 'path';
import parseFile from './parser/parsers.js';
import formatter from './formatters/index.js';
import buildTreeDiff from './buildTreeDiff.js';

const dirName = process.cwd();
const readFile = (filepath) => fs.readFileSync(path.resolve(dirName, '__fixtures__', filepath), 'utf-8');
const getFormat = (formatName) => path.extname(formatName).substring(1);

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);

  const format1 = getFormat(filePath1);
  const format2 = getFormat(filePath2);

  const obj1 = parseFile(data1, format1);
  const obj2 = parseFile(data2, format2);
  const diff = buildTreeDiff(obj1, obj2);
  const formatters = formatter(format);
  return formatters(diff);
};

export default gendiff;
