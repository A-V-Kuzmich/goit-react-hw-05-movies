import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackDropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackDropClick}>
      <div className={s.modal}>
        <button type="button" onClick={onClose} className={s.modalButton}>
          <span className="material-icons">close</span>
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
