import React, { useState } from 'react';
import './addImages.css';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import axios from './axios';
const IMG_URL = '/auth/upload';

const AddImagesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('');

  // specify upload params and url for your files
  const getUploadParams = async ({ file, meta }) => { 
    return { url: `http://localhost:3001/auth/upload/${selectedGenre}` };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = async (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  return (
    <div className='addImages__container'>
      <form encType='multipart/form-data' className='addImages__form'>
        <div className='addImages__genre'>
          <label className='addImages__label' htmlFor='Genre'>
            Genre:{''}
          </label>
          <select
            onChange={(e) => setSelectedGenre(e.target.value)}
            className='addImages__selector'
            name='genres'
            id=''
          >
            <option value=""></option>
            <option className='addImages__selctions' value='misc'>
              Misc
            </option>
            <option className='addImages__selctions' value='birds'>
              Birds
            </option>
            <option className='addImages__selctions' value='people'>
              People
            </option>
          </select>
        </div>
        <Dropzone
          disabled={selectedGenre === '' ? true : false}
          multiple={true}
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept='image/*,audio/*,video/*'
        />
      </form>
    </div>
  );
};
export default AddImagesPage;
