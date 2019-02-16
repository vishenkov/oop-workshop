import Geo from '.';
import defaultRender from './render';

export default async (ip, { lib, render = defaultRender } = {}) => {
  const geo = new Geo({ lib });
  const address = await geo.getInfoByIp(ip);
  return render(address);
};
