import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './Search.module.scss';

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    navigate({ ...location, search: `query=${searchQuery}` });
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <input
          value={searchQuery}
          onChange={({ currentTarget: { value } }) => setSearchQuery(value)}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
}
