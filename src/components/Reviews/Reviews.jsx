import { NavLink } from 'react-router-dom';
import s from './Reviews.module.scss';

export function Reviews() {
  console.log('Reviews');
  return (
    <NavLink to="/movies" className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}>
      Cast
    </NavLink>
  );
}
