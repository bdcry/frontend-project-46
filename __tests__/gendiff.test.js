import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/gendiff.js';

// Получаем текущий путь до файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__tests-fixtures__', filename);

test('checking on empty files', () => {
  const expectedDiffEmptyFiles = `{

}`;
  const filePath1 = getFixturePath('emptyfile1.json');
  const filePath2 = getFixturePath('emptyfile2.json');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffEmptyFiles);
});

test('checking on same files', () => {
  const expectedDiffSameFiles = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50
}`;
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file1.json');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffSameFiles);
});

test('check for deletion in a file', () => {
  const expectedDiffDelSmthInFile = `{
  - follow: false
  host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffDelSmthInFile);
});
