import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

import { apiService } from '../../apiServise';

import Navigation from '../Navigation';
import HomePage from '../../views/HomePage';
import MoviesList from '../../views/MoviesList';
import { Loader } from '../Loader';
import { Notification } from '../Notification';

const MovieDetailsPage = lazy(() =>
  import('../../views/MovieDetailsPage' /*webpackChunkName: "MovieDetails"*/),
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const Cast = lazy(() => import('../../views/MovieDetailsPage/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../../views/MovieDetailsPage/Reviews' /* webpackChunkName: "Reviews" */),
);

export default function App() {
  const [filmArray, setFilmArray] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (searchParam === '') {
      return;
    }
    (async function getFilmByQuery() {
      const { results } = await apiService('search/movie', { query: searchParam, page });
      if (results.length === 0) {
        Notification(' Nothing found', 'Please enter a more specific request');
        return;
      }
      setFilmArray(prev => [...prev, ...results]);
    })();
  }, [page, searchParam]);

  return (
    <Suspense fallback={<Loader />}>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="movies/*" element={<MoviesPage />}>
            <Route
              path="*"
              element={<MoviesList array={filmArray} loadMore={() => setPage(page + 1)} />}
            />

            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<Notification title="Sorry" text="Something went wrong" />} />
        </Routes>
      </main>
      <footer />
    </Suspense>
  );
}
