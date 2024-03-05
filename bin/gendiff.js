#!/usr/bin/env node
import { program } from 'commander';
import parseFile from '../src/parser/jsonParser.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    console.log('Data from filepath1:', data1);
    console.log('Data from filepath2:', data2);
  });

program.parse();
