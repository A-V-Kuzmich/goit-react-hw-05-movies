import axios from 'axios';

// const url = 'https://api.themoviedb.org/3/movie/550?api_key=a3ec7c1621ade0b1491e66cd43b88745';

/*
https://api.themoviedb.org/3/trending/movie/week   --- список самых популярных фильмов на сегодня для создания коллекции на главной странице.

https://api.themoviedb.org/3/search/movie &query=hgtvb&page=1 --- поиск кинофильма по ключевому слову на странице фильмов.

https://api.themoviedb.org/3/movie/{movie_id}  --- запрос полной информации о фильме для страницы кинофильма.

https://api.themoviedb.org/3/movie/{movie_id}/credits  --- запрос информации о актёрском составе для страницы кинофильма.

// https://api.themoviedb.org/3/movie/{movie_id}/reviews &language=en-US&page=1  --- запрос обзоров для страницы кинофильма.
*/

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'a3ec7c1621ade0b1491e66cd43b88745',
  append_to_response: 'videos',
};

export async function apiService(url, config) {
  let response = await axios.get(`${url}`, { params: config });
  //   let response = await axios({
  //     metod: 'get',
  //     url: `${url}`,
  //     responseType: 'json',
  //     params: config,
  //   });
  console.log(response.data);
  return response.data;
}

/* 
import axios from 'axios';
import { onFetchError } from '../components/notifications.js';
import { hideSpiner, showSpiner } from '../components/spiner.js';
import { getFromLocalStorage } from '../layout/local-storage';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';

export const getApiData = query => {
  showSpiner();
  let langs = getFromLocalStorage('lang')

  return axios
    .get(`${query}&api_key=${API_KEY}&append_to_response=videos&language=${langs}`)

    .then(response => {
      return response.data;
    })
    .catch(onFetchError)
    .finally(hideSpiner);
};
*/
