import React from 'react';
import axios from './axios';
import { useDispatch, useSelector } from 'react-redux';
const IMAGE_URL = '/auth/add_images'

const CloudinaryUploadWidget = (currentPage) => {
    const genre = currentPage.currentPage;
    async function postImage(info) {
        await axios.post(IMAGE_URL, info);
    }

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dpyrd2wup',
            uploadPreset: 'srgbk1fd',
            tags: [genre],
        sources: ['local'],
        multiple: false,
            defaultSource: 'local',
            maxImageWidth: 1200,
            singleUploadAutoClose: false,
        showUploadMoreButton: true,
        styles: {
          palette: {
            window: '#000000',
            sourceBg: '#000000',
            windowBorder: '#8E9FBF',
            tabIcon: '#FFFFFF',
            inactiveTabIcon: '#8E9FBF',
            menuIcons: '#2AD9FF',
            link: '#08C0FF',
            action: '#336BFF',
            inProgress: '#00BFFF',
            complete: '#33ff00',
            error: '#EA2727',
            textDark: '#000000',
            textLight: '#FFFFFF',
          },
          fonts: {
            default: null,
            "'Space Mono', monospace": {
              url: 'https://fonts.googleapis.com/css?family=Space+Mono',
              active: true,
            },
          },
            },
        
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info);
            postImage(result.info);
            
          }
          
      }
      );
    
    return (
      <p onClick={() => {myWidget.open()}} id='upload_widget' className='gallery__genres_label'>
        +
      </p>
    );
  }

  


export default CloudinaryUploadWidget;
