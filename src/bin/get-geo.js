#!/usr/bin/env node

import Geo from '..';

(async () => {
  console.log(await (new Geo()).getInfoByIp(process.argv[2]));
})();
