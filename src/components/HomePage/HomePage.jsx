import s from './HomePage.module.scss';
import { useEffect, useState } from 'react';
import { ApiService } from '../ApiServise/ApiServise';
import { Link } from 'react-router-dom';

export function HomePage({ click }) {
  const [filmArray, setFilmArray] = useState([]);

  useEffect(() => {
    async function getFilm() {
      const result = await ApiService('trending/movie/week');
      setFilmArray(result.results);
    }
    getFilm();
  }, []);

  const filmItem = filmArray.map(({ id, poster_path, release_date, vote_average, title }) => (
    <li key={id} className={s.GalleryItem}>
      <Link to={`/movies/${id}`}>
        <div className={s.ImageContainer}>
          <img
            className={s.Image}
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w500' + poster_path
                : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
            }
            loading="lazy"
            alt={title + 'photo'}
          />
          <p onClick={() => click({ id })}>
            <img
              height="30px"
              width="30px"
              src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png"
              alt="trailer"
            />
            YouTube
          </p>
        </div>
        <div>
          <h2>{title}</h2>
          <div>
            {/* <ul class='films__genre'>
        {{#each genre_ids}}
        <li class='films__genre-item' data-index='{{this}}'>{{this}}</li>
        {{/each}}
        {{#each genres}}
        <li class='films__genre-item' data-index='{{this}}'>{{this.name}}</li>
        {{/each}}
      </ul> */}
            <span>|</span>
            <p>{release_date}</p>
            <p>{vote_average}</p>
          </div>
        </div>
      </Link>
    </li>
  ));

  return <ul className={s.Gallery}>{filmItem}</ul>;
}
