import axios from 'axios';

export async function getData() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/reviews/';
  const url = BASE_URL + END_POINT;

  const response = await axios.get(url);
  return response.data;
}
