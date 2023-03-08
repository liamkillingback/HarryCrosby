import React, { useEffect, useState } from 'react';
import './galleryimages.css';
import { useDispatch, useSelector } from 'react-redux';
import { setImages } from '../../state';
import axios from '../../components/axios';
import { Image } from "../../components"
import ReactDOM from 'react-dom';
import CloudinaryUploadWidget from '../../components/UploadWidget';

const IMAGES_URL = '/auth/gallery_images';


const GalleryImages = () => {
  const isAdmin = useSelector((state) => state.isAdmin);
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("all");
  const genres = ['all', 'birds', 'people', 'misc'];
  console.log(images);
  const getimages = async () => {
    try {
      await axios.post(IMAGES_URL, { genre: genre }).then((res) => {
        var data = res.data;
        console.log(data);
        console.log(genre);
        dispatch(setImages({ images: data }));
      }); 
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getimages();
  }, [genre]);
  const AddImages = () => {
    if (isAdmin) {
      return (
        <CloudinaryUploadWidget currentPage={genre} />
      )
    }
    else return null;
  }

  const Titles = () => {
    return ReactDOM.createPortal(
      <div className='gallery__genres'>
        <label
          id={genre === genres[0] ? 'highlight' : null}
          className='gallery__genres_label'
          onClick={() => setGenre('all')}
        >
          all
        </label>
        <label
          id={genre === genres[1] ? 'highlight' : null}
          className='gallery__genres_label'
          onClick={() => setGenre('birds')}
        >
          birds
        </label>
        <label
          id={genre === genres[2] ? 'highlight' : null}
          className='gallery__genres_label'
          onClick={() => setGenre('people')}
        >
          people
        </label>
        <label
          id={genre === genres[3] ? 'highlight' : null}
          className='gallery__genres_label'
          onClick={() => setGenre('misc')}
        >
          misc
        </label>
        <AddImages />
      </div>,
      document.getElementById('App')
    );
  }

  if (Boolean(images)) {
    return (
      <>
        <Titles />
        {images.forEach(image => (
          <div key={image._id} className='gallery__image'>
            <Image imagePath={image.imagePath} _id={image._id} />
          </div>
        ))}
      </>
    );
  } else return <div>no Images found</div>;
};
export default GalleryImages;

// {
//   images.map(({ _id, imagePath }) => (
//     <div key={_id} className='gallery__image'>
//       <Image imagePath={imagePath} _id={_id} />
//     </div>
//   ));
// }