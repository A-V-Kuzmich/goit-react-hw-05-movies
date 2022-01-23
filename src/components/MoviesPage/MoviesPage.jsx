import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Search } from '../Search';
import s from './MoviesPage.module.scss';

export default function MoviesPage() {
  const navigate = useNavigate();
  const { movieId } = useParams();

  return (
    <>
      <div className={s.form}>
        <button className={s.button} type="button" onClick={() => navigate(-1)}>
          &#128072; back
        </button>
        {!movieId && <Search />}
      </div>
      <Outlet />
    </>
  );
}
