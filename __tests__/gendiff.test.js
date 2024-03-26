import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/gendiff.js';

// Получаем текущий путь до файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readContent('expected_stylish.txt');
const expectedPlain = readContent('expected_plain.txt');
const expectedJSON = readContent('expected_json.txt');

// Stylish Check
describe('FormatStylish', () => {
  it('FormatStylish JSON check', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    const diff = gendiff(filePath1, filePath2);

    expect(diff).toEqual(expectedStylish);
  });

  it('FormatStylish YML check', () => {
    const filePath1 = getFixturePath('file1.yml');
    const filePath2 = getFixturePath('file2.yml');
    const diff = gendiff(filePath1, filePath2);

    expect(diff).toEqual(expectedStylish);
  });
});

// Plain Check
describe('FormatPlain', () => {
  it('FormatPlain JSON check', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    const diff = gendiff(filePath1, filePath2, 'plain');

    expect(diff).toEqual(expectedPlain);
  });

  it('FormatPlain YML check', () => {
    const filePath1 = getFixturePath('file1.yml');
    const filePath2 = getFixturePath('file2.yml');
    const diff = gendiff(filePath1, filePath2, 'plain');

    expect(diff).toEqual(expectedPlain);
  });
});

// JSON Check
describe('FormatJSON', () => {
  it('FormatJSON JSON check', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    const diff = gendiff(filePath1, filePath2, 'json');

    expect(diff).toEqual(expectedJSON);
  });

  it('FormatJSON YML check', () => {
    const filePath1 = getFixturePath('file1.yml');
    const filePath2 = getFixturePath('file2.yml');
    const diff = gendiff(filePath1, filePath2, 'json');

    expect(diff).toEqual(expectedJSON);
  });
});
