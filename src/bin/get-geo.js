#!/usr/bin/env node

import grabber from '..';

(async () => console.log(await grabber(process.argv[3])))();
