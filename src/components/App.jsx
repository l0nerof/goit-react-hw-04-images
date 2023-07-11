import { Modal } from './modal/Modal';
import { SearchBar } from './searchBar/SearchBar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { useState } from 'react';

export function App() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [modalImg, setModalImg] = useState('');

  const handleFormSubmit = inputValue => {
    setInputValue(inputValue);
  };

  const toggleModal = largeImageURL => {
    setShowModal(prevShowModal => !prevShowModal);
    setModalImg(largeImageURL);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery inputValue={inputValue} showModal={toggleModal} />
      <div>
        {showModal && <Modal onClose={toggleModal} modalImg={modalImg} />}
      </div>
    </div>
  );
}
