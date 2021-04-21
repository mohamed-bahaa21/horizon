import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../firebase/firebase";

import {
  CButton,
} from "@coreui/react";

import FlashMessage from 'react-flash-message'

import axios from "axios";

var SERVER_URI = "http://localhost:5000";
var ADMIN_URI = "http://localhost:3000";

if (process.env.NODE_ENV === "development") {
  SERVER_URI = "http://localhost:5000";
  ADMIN_URI = "http://localhost:3000";
}

if (process.env.NODE_ENV === "production") {
  SERVER_URI = "https://horizon-server.herokuapp.com";
  ADMIN_URI = "https://horizon-admin.herokuapp.com";
}

const UploadImg = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState('false')
  const [uploadBtnState, setUploadBtnState] = useState('false');

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    setUploaded('false')
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },

      error => {
        console.log(error);
      },

      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            console.log("image: ", image);
            console.log("URL: " + url);

            const img_url = {
              url: url
            };

            axios.post(`${SERVER_URI}/api/postImgToGallery`, img_url)
              .then(res => console.log(res));

            setUploaded('true')

            window.location = `${ADMIN_URI}/#/landing/progDesigns/`;
          });
      }
    );
  };

  const copyToCLip = () => {
    navigator.clipboard.writeText(url)
    console.log(url);
  }

  return (
    <div>
      {
        (uploaded === 'true') ?
          <div>
            <FlashMessage duration={3000}>
              <strong>Uploaded Successfully...</strong>
            </FlashMessage>
          </div>
          :
          <p>...</p>
      }
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <CButton color="secondary" onClick={handleUpload}>Upload</CButton>
      <br /><br />
      <strong> Image URL: </strong> {url}
      <br /><br />
      <CButton color="secondary" onClick={copyToCLip}>Copy Image URL to Clipboard</CButton>
      <br /><br />
      <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
    </div>
  );
};

export default UploadImg
