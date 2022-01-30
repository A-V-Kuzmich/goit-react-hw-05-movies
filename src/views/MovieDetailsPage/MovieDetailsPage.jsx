import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { apiService } from '../../apiServise';
import Modal from '../../components/Modal/Modal';
import Video from '../../components/Video';
import s from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [videoList, setVideoList] = useState();
  const location = useLocation();

  const { movieId } = useParams();
  const {
    poster_path,
    original_title,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
    videos,
  } = film;

  useEffect(() => {
    (async function getFilm() {
      const result = await apiService(`movie/${movieId}`);
      setFilm(result);
    })();
  }, [movieId]);

  const toggleModal = () => {
    if (!showModal) {
      setVideoList(videos.results.map(value => value.key).join(','));
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <img
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w500' + poster_path
                : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
            }
            alt={original_title}
          />
          <img
            onClick={toggleModal}
            className={s.video}
            height="50px"
            width="50px"
            src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721679-youtube_108064.png"
            alt="trailer ico"
          />
        </div>
        <div className={s.infoContainer}>
          <h3>{original_title}</h3>
          <div>
            <span className={s.textContainer}>
              Vote/Votes: {vote_average} / {vote_count}
            </span>
            <span className={s.textContainer}>Popularity: {popularity}</span>
            <span className={s.textContainer}>Genre:</span>
            <ul>{genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}</ul>
          </div>
          <p>
            <span className={s.textContainer}>About:</span>
            {overview}
          </p>

          <div className={s.containerLink}>
            <NavLink
              to="cast"
              state={{ from: location.state.from } ?? ''}
              className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
            >
              Cast
            </NavLink>
            <NavLink
              to="reviews"
              state={{ from: location.state.from } ?? ''}
              className={({ isActive }) => s.link + ' ' + (isActive ? s.ActiveL : '')}
            >
              Reviews
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
      {showModal && (
        <Modal onClose={toggleModal}>
          <Video list={videoList} />
        </Modal>
      )}
    </>
  );
}
