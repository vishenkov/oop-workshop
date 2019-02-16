import getGrabber from './grabber';
import render from './render';

export default async (ip = '', { baseUrl = 'http://ip-api.com/json', lib } = {}) => {
  const grab = getGrabber(baseUrl, lib);
  const response = await grab(ip);
  return render(response);
};
