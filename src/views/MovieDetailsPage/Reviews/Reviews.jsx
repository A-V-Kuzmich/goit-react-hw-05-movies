import { useEffect, useState } from 'react';
import { apiService } from '../../../apiServise';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.scss';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async function getFilm() {
      const { results } = await apiService(`movie/${movieId}/reviews`);
      setReviews(results);
    })();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {reviews.length !== 0 &&
        reviews.map(({ content, author, id }) => (
          <li key={id} className={s.item}>
            <h3 className={s.author}>{author}</h3>
            <p className={s.content}>{content}</p>
          </li>
        ))}
      {reviews.length === 0 && (
        <li>
          <h2>Sorry, there's nothing here</h2>
        </li>
      )}
    </ul>
  );
}
