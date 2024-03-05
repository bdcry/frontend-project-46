import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
  const dirName = process.cwd();
  const data = fs.readFileSync(path.resolve(dirName, '__fixtures__', filePath));
  const dataObj = JSON.parse(data);
  return dataObj;
};

export default parseFile;
