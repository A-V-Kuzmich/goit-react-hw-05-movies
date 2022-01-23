import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.scss';

export default function MoviesList({ array }) {
  return (
    <ul className={s.gallery}>
      {array.map(({ id, poster_path, title }) => (
        <li key={id} className={s.GalleryItem}>
          <NavLink to={`../../movies/${id}`} className={s.imageContainer}>
            <div>
              <img
                className={s.image}
                src={
                  poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + poster_path
                    : 'https://github.com/A-V-Kuzmich/filmoteka/blob/main/src/images/content/no-image-poster.png?raw=true'
                }
                loading="lazy"
                alt={title + 'photo'}
              />
            </div>
            <div className={s.textContainer}>
              <h2 className={s.title}>{title}</h2>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
MoviesList.propTypes = {
  array: PropTypes.array,
};
