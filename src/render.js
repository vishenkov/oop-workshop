export default (data) => {
  if (data.status === 'success') {
    return `It is ${data.country}, city ${data.city}, timezone: "${data.timezone}"`;
  }
  return 'Request failed!';
};
