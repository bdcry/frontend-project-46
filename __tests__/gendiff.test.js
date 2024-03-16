import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/gendiff.js';

// Получаем текущий путь до файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__tests-fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedJson = readContent('expected_stylish.txt');

// JSON format check
test('it should correctly compare two JSON files with nested structures', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');

  const diff = gendiff(filePath1, filePath2);

  expect(diff).toEqual(expectedJson);
});
