import axios from 'axios';


export default (baseUrl, lib = axios) => async (param = '') => {
  const { data } = await lib.get(`${baseUrl}/${param}`);
  return data;
};
