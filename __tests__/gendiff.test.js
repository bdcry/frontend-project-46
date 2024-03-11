import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/gendiff.js';

// Получаем текущий путь до файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__tests-fixtures__', filename);

// JSON format check
test('checking on empty files JSON', () => {
  const expectedDiffEmptyFiles = `{

}`;
  const filePath1 = getFixturePath('emptyfile1.json');
  const filePath2 = getFixturePath('emptyfile2.json');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffEmptyFiles);
});

test('checking on same files JSON', () => {
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

test('check for deletion in a file JSON', () => {
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

// YAML format check
test('checking on empty files YAML', () => {
  const expectedDiffEmptyFiles = `{

}`;
  const filePath1 = getFixturePath('emptyfile1.yml');
  const filePath2 = getFixturePath('emptyfile2.yml');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffEmptyFiles);
});

test('checking on same files YAML (yml)', () => {
  const expectedDiffSameFiles = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50
}`;
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file1.yml');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffSameFiles);
});

test('check for deletion in a file YAML (yml)', () => {
  const expectedDiffDelSmthInFile = `{
  - follow: false
  host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file2.yml');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffDelSmthInFile);
});

test('checking on same files YAML (yaml)', () => {
  const expectedDiffSameFiles = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50
}`;
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file1.yaml');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffSameFiles);
});

test('check for deletion in a file YAML (yaml)', () => {
  const expectedDiffDelSmthInFile = `{
  - follow: false
  host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  expect(gendiff(filePath1, filePath2)).toEqual(expectedDiffDelSmthInFile);
});

test('checking on wrong format', () => {
  const filePath1 = getFixturePath('file1.jsons');
  const filePath2 = getFixturePath('file2.yaml');
  // Используем стрелочную функцию для того, чтобы
  // обернуть вызов gendiff, позволив jest получить исключение,
  // а не результат.
  expect(() => gendiff(filePath1, filePath2)).toThrow();
});
