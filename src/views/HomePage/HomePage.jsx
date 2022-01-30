import { useEffect, useState } from 'react';
import { apiService } from '../../apiServise';
import MoviesList from '../../views/MoviesList';
import s from './HomePage.module.scss';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [filmArray, setFilmArray] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await apiService('trending/movie/week', { page });
      setFilmArray(prev => [...prev, ...results]);
    })();
  }, [page]);

  return (
    <>
      <h1 className={s.title}>Trending last week</h1>
      <MoviesList array={filmArray} loadMore={() => setPage(page + 1)} />
    </>
  );
}
