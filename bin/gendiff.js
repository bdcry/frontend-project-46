#!/usr/bin/env node
import { program } from 'commander';
import compare from '../src/compare.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2) => {
    console.log(compare(filePath1, filePath2));
  });

program.parse();
