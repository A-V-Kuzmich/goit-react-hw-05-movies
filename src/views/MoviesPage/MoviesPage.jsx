import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Search } from '../../components/Search';
import s from './MoviesPage.module.scss';

export default function MoviesPage() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const location = useLocation();

  const onGoBack = state => {
    if (!state) {
      return '/';
    }
    const { from } = state;

    if (from.search !== '') {
      return from.pathname + from.search;
    }
    if (from.pathname !== '') {
      return from.pathname;
    }
    return '/';
  };

  return (
    <>
      <div className={s.form}>
        <button
          className={s.button}
          type="button"
          onClick={() => navigate(onGoBack(location.state))}
        >
          &#128072; back
        </button>
        {!movieId && <Search />}
      </div>
      <Outlet />
    </>
  );
}
