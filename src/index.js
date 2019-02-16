import axios from 'axios';

export default class Geo {
  constructor({ lib = axios, baseUrl = 'http://ip-api.com/json' } = {}) {
    this.lib = lib;
    this.baseUrl = baseUrl;
  }

  grab(ip = '') {
    const url = new URL(`${this.baseUrl}/${ip}`);
    return this.lib.get(url.toString());
  }

  async getInfoByIp(ip) {
    const { data } = await this.grab(ip);
    return data;
  }
}
