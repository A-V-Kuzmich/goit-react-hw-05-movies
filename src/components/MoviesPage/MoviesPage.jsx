// import s from './MoviesPage.module.scss';

import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Search } from '../Search';

export default function MoviesPage() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}></button>
      {!movieId && <Search />}
      <Outlet />
    </>
  );
}
