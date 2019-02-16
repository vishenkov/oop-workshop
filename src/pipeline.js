import fs from 'fs';
import _ from 'lodash';

const files = fs.readdirSync('./');
const filteredFiles = _.reject(files, file => console.log(file) || _.startsWith(file, '.'));
const sortedFiles = _.sortBy(filteredFiles);
const middleFile = sortedFiles[Math.round(_.size(sortedFiles) / 2)];
const pluralFile = _.endsWith(middleFile, 's') ? middleFile : `${middleFile}s`;
const upperFile = _.toUpper(pluralFile);

console.log(upperFile);
