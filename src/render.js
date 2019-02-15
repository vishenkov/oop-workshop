export default (data) => {
  if (data.status === 'success') {
    console.log(`It is ${data.country}, city ${data.city}, timezone: "${data.timezone}"`);
  } else {
    console.log('Request failed!');
  }
};
