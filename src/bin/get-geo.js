#!/usr/bin/env node

import Geo from '..';

(async () => {
  console.log(await (new Geo()).render(process.argv[2]));
})();
