import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/gendiff.js';

// Получаем текущий путь до файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const extensions = ['.json', '.yml'];

// Check JSON/Plain/Stylish with JSON/YML.
describe.each(['json', 'plain', 'stylish'])('GenDiff test with formatter %s', (formatter) => {
  test.each(extensions)('GenDiff test with extension %s', (extension) => {
    const filePath1 = getFixturePath(`file1${extension}`);
    const filePath2 = getFixturePath(`file2${extension}`);
    const diff = gendiff(filePath1, filePath2, formatter);
    const expectedResult = readContent(`expected_${formatter}.txt`);

    expect(diff).toEqual(expectedResult);
  });
});
