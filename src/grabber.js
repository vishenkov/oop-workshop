
export default (baseUrl, lib) => async (param = '') => {
  const { data } = await lib.get(`${baseUrl}/${param}`);
  return data;
};
