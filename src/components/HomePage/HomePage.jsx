import { useEffect, useState } from 'react';
import { apiService } from '../../apiServise';
import MoviesList from '../MoviesList';
import s from './HomePage.module.scss';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [filmArray, setFilmArray] = useState([]);

  useEffect(() => {
    getFilm({ page });
  }, [page]);

  async function getFilm(config) {
    const { results } = await apiService('trending/movie/week', config);
    setFilmArray(prev => [...prev, ...results]);
  }

  const increment = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className={s.title}>Trending last week</h1>
      <MoviesList array={filmArray} loadMore={increment} />
    </>
  );
}
