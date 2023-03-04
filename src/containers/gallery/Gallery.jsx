import React from 'react';
import './gallery.css';
import { GalleryImages } from '../index';


const Gallery = () => {
  
  return (
    <div id='gallery' className='gallery__container'>
      <div className='gallery__photos'>
        <GalleryImages />
      </div>
    </div>
  );
};
export default Gallery;
