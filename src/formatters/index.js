import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const formatter = (format) => {
  switch (format) {
    case 'stylish':
      return formatStylish;
    case 'plain':
      return formatPlain;
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatter;
