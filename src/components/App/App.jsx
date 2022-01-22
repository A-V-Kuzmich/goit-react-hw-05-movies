import { Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { ApiService } from '../../apiServise/apiServise';
import { Navigation } from '../Navigation';
import { HomePage } from '../HomePage/HomePage';
import { MovieDetailsPage } from '../MovieDetailsPage';
import { Cast } from '../MovieDetailsPage/Cast';
import { Reviews } from '../MovieDetailsPage/Reviews';
import { MoviesPage } from '../MoviesPage';

export default function App() {
  const hendleMove = e => {
    console.log(e);
  };

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage click={hendleMove} />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h1>sorry</h1>} />
        </Routes>
      </main>
      <footer />
    </>
  );
}
