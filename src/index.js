import axios from 'axios';
import getGrabber from './grabber';
import render from './render';

export default async (ip = '') => {
  const grab = getGrabber('http://ip-api.com/json', axios);
  const response = await grab(ip);
  return render(response);
};
