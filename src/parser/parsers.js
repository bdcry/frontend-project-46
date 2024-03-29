import yaml from 'js-yaml';

const parseFile = (data, format) => {
  switch (format) {
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

export default parseFile;
