import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <Link to="/">HomePage</Link>
      <Link to="/movies">MoviesPage</Link>
      <Link to="/movies/:movieId">MovieDetailsPage</Link>
      <Link to="/movies/:movieId/cast">Cast</Link>
      <Link to="/movies/:movieId/reviews">Reviews</Link>
    </nav>
  );
}
