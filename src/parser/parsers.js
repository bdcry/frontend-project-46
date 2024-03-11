import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filePath) => {
  const dirName = process.cwd();
  const data = fs.readFileSync(path.resolve(dirName, '__fixtures__', filePath), 'utf-8');
  const formatName = path.extname(filePath);

  switch (formatName) {
    case '.yaml':
    case '.yml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported file format: ${formatName}`);
  }
};

export default parseFile;
