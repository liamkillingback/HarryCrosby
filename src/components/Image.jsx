import React, { useState } from 'react';
import './imageModal.css';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

const Image = ({ imagePath, _id }) => {
  const [showModal, setShowModal] = useState('gallery__image_container hide');
  const isAdmin = useSelector((state) => state.isAdmin);

  const setModalState = () => {
    console.log(showModal);
    setShowModal(
      showModal === 'gallery__image_container hide'
        ? 'gallery__image_container'
        : 'gallery__image_container hide'
    );
  };

  const BaseImage = () => {
    return (
      <div key={_id} className='gallery__image'>
        {isAdmin? <span className='image__delete-btn'>&times;</span> : null}
        <img
          className='gallery__img'
          onClick={setModalState}
          id={_id}
          src={`http://localhost:3001/assets/${imagePath}`}
          alt='404 not found'
        />
      </div>
    );
  };
  const ModalImage = () => {
    return ReactDOM.createPortal(
      <div className={showModal}>
        <div className='gallery__modal_image'>
          <img className='gallery__modal_img'
            onClick={setModalState}
            id={_id}
            src={`http://localhost:3001/assets/${imagePath}`}
            alt='404'
          />
        </div>
      </div>,
      document.getElementById('root')
    );
  };

  return (
    <>
      <BaseImage />
      <ModalImage />
    </>
  );
};
export default Image;
