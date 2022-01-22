import { useEffect, useState } from 'react';
import { apiService } from '../../../apiServise';
import { useParams } from 'react-router-dom';

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
    <ul>
      {credits.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? 'https://image.tmdb.org/t/p/w400' + profile_path
                : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
            }
            alt={name}
          />
          {/* <h3>{name}</h3> */}
          <span>{name}</span>
          <span> - </span>
          <span>{character}</span>
        </li>
      ))}
    </ul>
  );
}
