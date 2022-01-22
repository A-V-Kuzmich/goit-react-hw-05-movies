import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => (
  <nav className={s.Navigation}>
    <NavLink to="/" className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}>
      HomePage
    </NavLink>

    <NavLink to="/movies" className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}>
      MoviesPage
    </NavLink>
  </nav>
);
export default Navigation;
