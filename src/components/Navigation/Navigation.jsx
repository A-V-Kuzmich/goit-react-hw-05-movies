import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => (
  <nav className={s.navigation}>
    <NavLink to="/" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}>
      HomePage
    </NavLink>

    <NavLink to="/movies" className={({ isActive }) => s.link + ' ' + (isActive ? s.activeL : '')}>
      MoviesPage
    </NavLink>
  </nav>
);
export default Navigation;
