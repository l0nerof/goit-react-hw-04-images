import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';
import { useState, useEffect } from 'react';
import { fetchImageGallery } from 'Api/fetchImageGallery';

export function ImageGallery({ inputValue, showModal }) {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [page, setPage] = useState(1);
  const [isHiddenButton, setIsHiddenButton] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setPage(1);
      setPhotos(null);
      fetchImages();
    }
  }, [inputValue]);

  const fetchImages = () => {
    setLoading(true);

    fetchImageGallery(inputValue, page)
      .then(({ hits, totalHits }) => {
        console.log(hits);
        if (hits.length === 0) {
          alert('Put more information');
          setIsHiddenButton(true);
        } else {
          setPhotos(prevPhotos =>
            prevPhotos ? [...prevPhotos, ...hits] : hits
          );
          setIsHiddenButton(12 * page > totalHits);
          setLoading(false);
        }
      })
      .finally(() => setLoading(false));
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    if (page > 1) {
      fetchImages();
    }
  };

  return (
    <div>
      {photos && (
        <ul className={css.ImageGallery}>
          {photos.map(photo => (
            <ImageGalleryItem
              key={photo.id}
              smallImg={photo.webformatURL}
              alt={photo.tags}
              showModal={() => showModal(photo.largeImageURL)}
            />
          ))}
        </ul>
      )}
      {loading && <Loader />}
      {photos && !isHiddenButton && <Button loadMore={loadMore} />}
    </div>
  );
}

ImageGallery.propTypes = {
  inputValue: PropTypes.string,
};
