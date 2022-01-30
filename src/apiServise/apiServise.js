import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'a3ec7c1621ade0b1491e66cd43b88745',
  append_to_response: 'videos',
};

export async function apiService(url, config) {
  let { data } = await axios.get(url, { params: config });
  console.log(data);
  return data;
}
