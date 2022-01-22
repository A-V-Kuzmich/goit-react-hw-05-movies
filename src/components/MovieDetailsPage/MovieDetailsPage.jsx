import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { apiService } from '../../apiServise';
import s from './MovieDetailsPage.module.scss';

export function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const { poster_path, original_title, vote_average, vote_count, popularity, overview } = film;

  useEffect(() => {
    async function getFilm() {
      const result = await apiService(`movie/${movieId}`);
      setFilm(result);
    }
    getFilm();
  }, [movieId]);

  return (
    <>
      <div className={s.container}>
        <div>
          <img
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w500' + poster_path
                : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
            }
            alt={original_title}
          />
          {/* <img
      class='film__trailer-img'
      data-modal='modal-video-btn'
      src='https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png'
      alt='trailer'
    /> */}
        </div>
        <div>
          <h3>{original_title}</h3>

          <div>
            <ul>
              <li>Vote/Votes</li>
              <li>
                <span>&nbsp{vote_average}&nbsp</span>/ &nbsp{vote_count}
              </li>
            </ul>
            <ul>
              <li>Popularity</li>
              <li>{popularity}</li>
            </ul>
            <ul>
              <li>Original Title</li>
              <li>{original_title}</li>
            </ul>
            <ul>
              <li>Genre</li>
              {/* <ul class='modal__film-data modal__genres-list'>
          {{#each genres}}
            <li class='modal__film-data modal__genres-item'>{{this.name}}</li>
          {{/each}}
        </ul> */}
            </ul>
          </div>
          <h4>About</h4>
          <p>{overview}</p>
          <ul>
            <li>
              <NavLink
                to="cast"
                className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
              >
                Cast
              </NavLink>
              {/* <button type="button">add to Watched</button> */}
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
              >
                Reviews
              </NavLink>
              {/* <button type="button">add to queue</button> */}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
