import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

import { apiService } from '../../apiServise/apiServise';

import Navigation from '../Navigation';
import HomePage from '../HomePage';
import MoviesList from '../MoviesList';
import { Loader } from '../Loader';
import { Notification } from '../Notification';

const MovieDetailsPage = lazy(() =>
  import('../MovieDetailsPage' /*webpackChunkName: "MovieDetails"*/),
);
const MoviesPage = lazy(() => import('../MoviesPage' /* webpackChunkName: "MoviesPage" */));
const Cast = lazy(() => import('../MovieDetailsPage/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('../MovieDetailsPage/Reviews' /* webpackChunkName: "Reviews" */));

export default function App() {
  const [filmArray, setFilmArray] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (searchParam === '') {
      return;
    }
    getFilmByQuery({ query: searchParam, page });
  }, [page, searchParam]);

  async function getFilmByQuery(config) {
    const { results } = await apiService('search/movie', config);
    setFilmArray(prev => [...prev, ...results]);
  }

  const increment = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="movies/*" element={<MoviesPage />}>
              <Route path="*" element={<MoviesList array={filmArray} loadMore={increment} />} />

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
    </>
  );
}
