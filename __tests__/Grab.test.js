import fs from 'fs';
import _ from 'lodash/fp';
import Geo from '../src';

const basePath = './__tests__/__fixtures__/';

const getMock = response => ({
  get: () => ({ data: _.cloneDeep(response) }),
});

const readFile = filename => JSON.parse(fs.readFileSync(`${basePath}${filename}`, 'utf8'));

describe('Geo lib test', () => {
  test('Should return current location for empty argument', async () => {
    const response = readFile('empty.json');
    const mock = getMock(response);
    const geo = new Geo({ lib: mock });
    const address = await geo.getInfoByIp('');
    expect(address).toEqual(response);
  });
});
