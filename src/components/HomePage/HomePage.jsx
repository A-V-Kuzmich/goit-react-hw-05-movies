// import s from './HomePage.module.scss';
import { useEffect, useState } from 'react/cjs/react.development';
import { apiService } from '../../apiServise';
import MoviesList from '../MoviesList';

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
      <h1>Trending last week</h1>
      <MoviesList array={filmArray} />
    </>
  );
}
