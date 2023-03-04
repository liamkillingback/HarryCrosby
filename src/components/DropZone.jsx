import React, { Component } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function Basic(props) {
  const uploadFiles = () => {
    let formData = new FormData();

    for (var i = 0; i < acceptedFiles.length; i++) {
      let file = acceptedFiles[i];
      formData.append('articleFiles[]', file);
    }

    axios({
      method: 'post',

      data: formData,
    });
  };
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  console.log(props.id);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}- {file.size}
      bytes
    </li>
  ));

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {files.length > 0 && (
        <React.Fragment>
          <div>
            <h4>Files</h4>
            <ul>{files}</ul>
          </div>
          <button onClick={uploadFiles}>Submit</button>
        </React.Fragment>
      )}
    </section>
  );
}

export class UploadManuscript extends Component {
  render() {
    return <Basic />;
  }
}

export default UploadManuscript;
