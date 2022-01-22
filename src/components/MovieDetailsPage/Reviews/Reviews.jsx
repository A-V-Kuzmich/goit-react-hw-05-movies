import { useEffect, useState } from 'react';
import { apiService } from '../../../apiServise';
import { useParams } from 'react-router-dom';
// import s from './Reviews.module.scss';

export function Reviews() {
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
/* 
author: "garethmb"
author_details: {name: '', username: 'garethmb', avatar_path: '/https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg', rating: null}
content: "Life for Peter Parker (Tom Holland) is complicated thanks to his dual life as Spider-Man and the challenges of being in High School. Unfortunately for him; his best intentions are about to make things much worse in “Spider-Man: No Way Home”.\r\n\r\nTaking place where “Spider-Man: Far From Home” ended; Peter must deal with his secret identity being leaked by Tabloid Journalist J. Jonah Jameson (J.K. Simmons); and the throngs of people, helicopters, and protestors who follow his every move and camp outside his home.\r\n\r\nAs if this was not bad enough; being accused of being a murderer has drawn the attention of the authorities which further complicates his life as does returning to a school where everyone knows his identity.\r\n\r\nDesperate to get away from the constant scrutiny and observation; Peter seeks out Doctor Strange (Benedict Cumberbatch), and asks him to cast a spell that would make the world forget that Peter Parker is Spider-Man.\r\n\r\nStrange agrees but mid-spell Peter requests that there are some exemptions from the spell which include his Girlfriend MJ (Zendaya); his Aunt May (Marisa Tomei); and his friend Ned (Jacob Batalon).\r\n\r\nStrange agrees but in doing so; complications arise which allows entrants from other dimensions to enter their realm. Soon Peter is accosted by villains whom he does not know but seem to know him; that is until he is unmasked and they have no idea who this Peter Parker is before them.\r\n\r\nAs more villains arrive; Peter learns of their fates in their natural dimension and is determined to save them and give them a second chance which puts him at odds with Doctor Strange who says they must go back to whatever fate they had.\r\n\r\nWhat follows is a descent into humor and darkness as Peter despite his best intentions sees the situation go from bad to worse and he must fight to stay true to himself and save the day.\r\n\r\nThe film is a difficult one to review in the fact that there are so many surprise guests, twists, and turns that it is challenging to not reveal anything but suffice it to say that fans should absolutely enjoy it.\r\n\r\nThe film takes its time getting to the action as it has a very slow and deliberate climb and Director Jon Watts is confident enough in the characters and premise that he allows ample time for the characters and setting to build and be established before he gets to the action.\r\n\r\nWhile there is considerable fan service in the film; it never once seems like it is pandering and it all fits very well within the story and the MCU and opens up numerous possibilities for the future.\r\n\r\nThere is a mid-credit scene and a post-credit scene which is basically a trailer and both are very engaging in terms of the possibilities as Marvel has again shown that their plan of interwoven stories and characters continues to deliver and that Spider-Man still remains as popular and engaging as ever.\r\n\r\n4 stars out of 5"
created_at: "2021-12-15T15:35:00.071Z"
id: "61ba0b24d1444300413e2cbe"
updated_at: "2021-12-15T15:35:00.071Z"
url: "https://www.themoviedb.org/review/61ba0b24d1444300413e2cbe"
 */
