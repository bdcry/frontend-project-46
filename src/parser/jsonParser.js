import fs from 'fs';
import path from 'path';

// read json files
const dirName = process.cwd();

const fullPath1 = path.resolve(dirName, '__fixtures__', 'file1.json');
const data1 = fs.readFileSync(fullPath1);

const fullPath2 = path.resolve(dirName, '__fixtures__', 'file2.json');
const data2 = fs.readFileSync(fullPath2);

// create object
const dataObj1 = JSON.parse(data1);
console.log(dataObj1);

const dataObj2 = JSON.parse(data2);
console.log(dataObj2);
