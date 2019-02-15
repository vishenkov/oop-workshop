import 'source-map-support/register';
import axios from 'axios';
import getGrabber from './grabber';
import render from './render';

export default async (param = '') => {
  const grab = getGrabber('http://ip-api.com/json', axios);
  const response = await grab(param);
  return render(response);
};
