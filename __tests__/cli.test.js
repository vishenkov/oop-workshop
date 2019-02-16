import fs from 'fs';
import _ from 'lodash/fp';
import cli from '../src/cli';

const basePath = './__tests__/__fixtures__/';
const responses = {
  '': 'It is Russia, city Belgorod, timezone: "Europe/Moscow"',
  '124.21.33.13': 'It is United States, city Sierra Vista, timezone: "America/Phoenix"',
  bad: 'Request failed!',
};

const getMock = response => ({
  get: () => ({ data: _.cloneDeep(response) }),
});

const readFile = filename => JSON.parse(fs.readFileSync(`${basePath}${filename}`, 'utf8'));

describe('Geo lib test', () => {
  test('Should return current location for empty argument', async () => {
    const response = readFile('empty.json');
    const mock = getMock(response);
    const text = await cli('', { lib: mock });
    expect(text).toEqual(responses['']);
  });


  test('Should return address location for ip argument', async () => {
    const response = readFile('ip-response.json');
    const mock = getMock(response);
    const ip = '124.21.33.13';
    const text = await cli(ip, { lib: mock });
    expect(text).toEqual(responses[ip]);
  });


  test('Should return bad location for bad argument', async () => {
    const response = readFile('bad.json');
    const mock = getMock(response);
    const ip = 'bad';
    const text = await cli(ip, { lib: mock });
    expect(text).toEqual(responses[ip]);
  });
});
