import fs from 'fs';
import _ from 'lodash';

const result = _.reduce(
  [
    files => _.reject(files, file => _.startsWith(file, '.')),
    files => _.sortBy(files),
    files => files[Math.round(_.size(files) / 2)],
    file => (_.endsWith(file, 's') ? file : `${file}s`),
    file => _.toUpper(file),
  ],
  (acc, fn) => fn(acc),
  fs.readdirSync('./'),
);

console.log(result);
