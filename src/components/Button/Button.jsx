import PropTypes from 'prop-types';
import s from './Button.module.scss';

export function Button({ loadMore }) {
  return (
    <button type="button" className={s.button} onClick={loadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
