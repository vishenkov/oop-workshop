#!/usr/bin/env node

import cli from '../cli';

(async () => {
  const result = await cli(process.argv[2]);
  console.log(result);
})();
