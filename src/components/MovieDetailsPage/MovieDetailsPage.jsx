import { useEffect, useState } from 'react';
import { ApiService } from '../ApiServise/ApiServise';

export function MovieDetailsPage() {
  const [filmArray, setFilmArray] = useState([]);

  useEffect(() => {
    async function getFilm() {
      const result = await ApiService('trending/movie/week');
      setFilmArray(result.results);
    }
    getFilm();
  }, []);

  return 'oooops';
}
