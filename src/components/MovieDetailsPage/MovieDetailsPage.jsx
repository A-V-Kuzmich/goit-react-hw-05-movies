import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { apiService } from '../../apiServise';
import s from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const { poster_path, original_title, vote_average, vote_count, popularity, overview, genres } =
    film;

  useEffect(() => {
    async function getFilm() {
      const result = await apiService(`movie/${movieId}`);
      setFilm(result);
    }
    getFilm();
  }, [movieId]);
  console.log(film);

  return (
    <>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <img
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w500' + poster_path
                : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
            }
            alt={original_title}
          />
        </div>
        <div className={s.infoContainer}>
          <h3>{original_title}</h3>
          <div>
            <span className={s.textContainer}>
              Vote/Votes: {vote_average} / {vote_count}
            </span>
            <span className={s.textContainer}>Popularity: {popularity}</span>
            <span className={s.textContainer}>Genre:</span>
            <ul>{genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>
          </div>

          <p>
            <span className={s.textContainer}>About:</span>
            {overview}
          </p>

          <div className={s.containerLink}>
            <NavLink
              to="cast"
              className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
            >
              Cast
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
