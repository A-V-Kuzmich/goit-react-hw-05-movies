import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

import { apiService } from '../../apiServise/apiServise';

import Navigation from '../Navigation';
import HomePage from '../HomePage';
import MoviesList from '../MoviesList';
import { Loader } from '../Loader';
import './App.scss';

const MovieDetailsPage = lazy(() =>
  import('../MovieDetailsPage' /*webpackChunkName: "MovieDetails"*/),
);
const MoviesPage = lazy(() => import('../MoviesPage' /* webpackChunkName: "MoviesPage" */));
const Cast = lazy(() => import('../MovieDetailsPage/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('../MovieDetailsPage/Reviews' /* webpackChunkName: "Reviews" */));

export default function App() {
  const [filmArray, setFilmArray] = useState([]);

  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (searchParam === '') {
      return;
    }
    async function getFilmByQuery(query) {
      const { results } = await apiService('search/movie', {
        query: query,
        page: 1,
      });
      setFilmArray(results);
    }

    getFilmByQuery(searchParam);
  }, [searchParam]);

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
              <Route path="*" element={<MoviesList array={filmArray} />} />

              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>

            <Route path="*" element={<h1>sorry</h1>} />
          </Routes>
        </main>
        <footer />
      </Suspense>
    </>
  );
}
