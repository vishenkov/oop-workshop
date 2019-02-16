import getGrabber from './grabber';
import render from './render';


export default class Geo {
  constructor({ lib, baseUrl = 'http://ip-api.com/json', renderer = render } = {}) {
    this.lib = lib;
    this.baseUrl = baseUrl;
    this.renderer = renderer;
  }

  grab(ip = '') {
    return getGrabber(this.baseUrl, this.lib)(ip);
  }

  async render(ip) {
    const response = await this.grab(ip);
    return this.renderer(response);
  }
}
