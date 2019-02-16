import Geo from '.';
import defaultRender from './render';

export default async (ip, { lib, baseUrl, render = defaultRender } = {}) => {
  const geo = new Geo({ lib, baseUrl });
  const address = await geo.getInfoByIp(ip);
  return render(address);
};
