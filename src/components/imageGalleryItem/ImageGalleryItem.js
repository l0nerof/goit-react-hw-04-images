import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ showModal, alt, smallImg }) {
  return (
    <li className={css.ImageGalleryItem} onClick={showModal}>
      <img src={smallImg} alt={alt} className={css.ImageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string,
  alt: PropTypes.string,
};
