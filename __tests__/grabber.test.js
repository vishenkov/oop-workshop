import _ from 'lodash/fp';

import grab from '../src';

const responses = {
  '': 'It is Russia, city Belgorod, timezone: "Europe/Moscow"',
  '124.21.33.13': 'It is China, city Beijing, timezone: "Asia/Shanghai"',
  bad: 'Request failed!',
};

const mock = {
  get: param => ({ data: _.cloneDeep(responses[param]) }),
};

describe('grabber lib test', () => {
  test('Should return current location for empty argument', async () => {
    const response = await grab('', mock);
    expect(response).toEqual(responses['']);
  });

  test('Should return correct location for ip argument', async () => {
    const response = await grab('124.21.33.13', mock);
    expect(response).toEqual(responses['124.21.33.13']);
  });

  test('Should return error response for bad argument', async () => {
    const response = await grab('bad', mock);
    expect(response).toEqual(responses.bad);
  });
});
