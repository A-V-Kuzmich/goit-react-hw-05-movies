import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export const Navigation = () => (
  <nav className={s.Navigation}>
    <NavLink to="/" className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}>
      HomePage
    </NavLink>

    <NavLink to="/movies" className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}>
      MoviesPage
    </NavLink>

    <NavLink
      to="/movies/:movieId"
      className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
    >
      MovieDetailsPage
    </NavLink>

    <NavLink
      to="/movies/:movieId/cast"
      className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
    >
      Cast
    </NavLink>

    <NavLink
      to="/movies/:movieId/reviews"
      className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
    >
      Reviews
    </NavLink>
  </nav>
);
