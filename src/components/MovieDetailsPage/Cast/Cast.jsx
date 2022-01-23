import { useEffect, useState } from 'react';
import { apiService } from '../../../apiServise';
import { useParams } from 'react-router-dom';
import s from './Cast.module.scss';

export default function Cast() {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getFilm() {
      const { cast } = await apiService(`movie/${movieId}/credits`);
      setCredits(cast);
    }
    getFilm();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {credits.length &&
        credits.map(({ profile_path, name, character, id }) => (
          <li key={id} className={s.item}>
            <img
              className={s.image}
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w400' + profile_path
                  : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
              }
              alt={name}
            />
            <div className={s.textContainer}>
              <span className={s.name}>{name}</span>
              <span className={s.text}> - </span>
              <span className={s.character}>{character}</span>
            </div>
          </li>
        ))}
      {!credits.length && (
        <li>
          <h2>Sorry, there's nothing here</h2>
        </li>
      )}
    </ul>
  );
}
