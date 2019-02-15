import _ from 'lodash/fp';

import getGrabber from '../src/grabber';
import defaultResponse from './__fixtures__/default.json';
import ipResponse from './__fixtures__/ip-response.json';
import badResponse from './__fixtures__/bad.json';

const baseUrl = 'some.url';
const responses = {
  [`${baseUrl}/`]: defaultResponse,
  [`${baseUrl}/127.0.0.1`]: ipResponse,
  [`${baseUrl}/bad`]: badResponse,
};

const mock = {
  get: param => ({ data: _.cloneDeep(responses[param]) }),
};

describe('grabber lib test', () => {
  test('Should return current location for empty argument', async () => {
    const grab = getGrabber(baseUrl, mock);
    expect(await grab()).toEqual(defaultResponse);
  });

  test('Should return correct location for ip argument', async () => {
    const grab = getGrabber(baseUrl, mock);
    expect(await grab('127.0.0.1')).toEqual(ipResponse);
  });

  test('Should return error response for bad argument', async () => {
    const grab = getGrabber(baseUrl, mock);
    expect(await grab('bad')).toEqual(badResponse);
  });
});
