import React, { useState } from 'react';
import './addImages.css';
import 'react-dropzone-uploader/dist/styles.css';
import CloudinaryUploadWidget from './UploadWidget';


const AddImagesPage = () => {
  const NAME_OF_UPLOAD_PRESET = '';
  const YOUR_CLOUDINARY_ID = '';
  

  // called every time a file's `status` changes
  // receives array of files that are done uploading when submit button is clicked
  return (
    <div className='addImages__container'>
      <CloudinaryUploadWidget />
    </div>
  );
};
export default AddImagesPage;
