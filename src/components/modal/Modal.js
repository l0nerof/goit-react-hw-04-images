import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ modalImg, onClose }) {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape' || event.currentTarget === event.target) {
        console.log('esc');
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div className={css.Overlay} onClick={handleKeyDown}>
      <div className={css.Modal}>
        <img src={modalImg} alt="img" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  modalImg: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
