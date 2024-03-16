import formatStylish from './stylish.js';

const formatter = (formatName) => {
  switch (formatName) {
    case 'stylish':
    default:
      return formatStylish;
  }
};

export default formatter;
