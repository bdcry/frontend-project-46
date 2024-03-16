#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/gendiff.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2, options) => {
    console.log(gendiff(filePath1, filePath2, options.format));
  });

program.parse();
