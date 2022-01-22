import { useEffect, useState } from 'react';
import { apiService } from '../../../apiServise/apiServise';
import { useParams } from 'react-router-dom';

export function Cast() {
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

/* 
adult: false
cast_id: 1
character: "Peter Parker / Spider-Man"
credit_id: "5d8e28d38289a0000fcc32f9"
gender: 2
id: 1136406
known_for_department: "Acting"
name: "Tom Holland"
order: 0
original_name: "Tom Holland"
popularity: 129.942
profile_path: "/2qhIDp44cAqP2clOgt2afQI07X8.jpg" */
