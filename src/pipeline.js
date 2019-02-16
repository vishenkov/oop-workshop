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


class Pipeline {
  constructor(pipes = []) {
    this.pipes = pipes;
  }

  pipe(fn) {
    return new Pipeline([...this.pipes, fn]);
  }

  exec(data) {
    return _.reduce(this.pipes, (acc, fn) => fn(acc), data);
  }
}

const pipeline = new Pipeline()
  .pipe(files => _.reject(files, file => _.startsWith(file, '.')))
  .pipe(files => _.sortBy(files))
  .pipe(files => files[Math.round(_.size(files) / 2)])
  .pipe(file => (_.endsWith(file, 's') ? file : `${file}s`))
  .pipe(file => _.toUpper(file))
  .exec(fs.readdirSync('./'));

console.log(pipeline);
