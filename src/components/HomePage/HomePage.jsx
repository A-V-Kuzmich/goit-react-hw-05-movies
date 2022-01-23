import { useEffect, useState } from 'react/cjs/react.development';
import { apiService } from '../../apiServise';
import MoviesList from '../MoviesList';
import s from './HomePage.module.scss';

export default function HomePage() {
  const [filmArray, setFilmArray] = useState([]);

  useEffect(() => {
    async function getFilm() {
      const { results } = await apiService('trending/movie/week');
      setFilmArray(results);
    }
    getFilm();
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending last week</h1>
      <MoviesList array={filmArray} />
    </>
  );
}
