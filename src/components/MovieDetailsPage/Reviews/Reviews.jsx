import { useEffect, useState } from 'react';
import { apiService } from '../../../apiServise';
import { useParams } from 'react-router-dom';
// import s from './Reviews.module.scss';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getFilm() {
      const { results } = await apiService(`movie/${movieId}/reviews`);
      setReviews(results);
    }
    getFilm();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ content, author, created_at, id, author_details: { avatar_path } }) => (
        <li key={id}>
          {avatar_path && <img src={`${avatar_path}`} alt={author} />}
          <h3>{author}</h3>
          <span>{created_at}</span>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}
