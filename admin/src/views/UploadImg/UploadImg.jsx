import React, { useState } from "react";
import { storage } from "../../firebase/firebase";

import {
  CCollapse,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CListGroupItem,
  CButton,
  CAlert,
  CProgress,
  CProgressBar
} from "@coreui/react";

import axios from "axios";
import FlashMessage from 'react-flash-message'

import SERVER_URI from "../../reusable/api";

const UploadImg = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState('false')
  const [uploadBtnStateDisable, setUploadBtnStateDisable] = useState(true)
  const [copied, setCopied] = useState('false')
  const [visible, setVisible] = useState(false)

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setUploadBtnStateDisable(false)
    }
  };

  const handleUpload = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = new Date().getTime();

    let timeNow = `${date}${month}${year}T${time}`;

    setUploaded('false');

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
            setUploadBtnStateDisable(true)

            // window.location = `${ADMIN_URI}/#/landing/progDesigns/`;
          });
      }
    );
  };

  const copyToCLip = () => {
    setCopied('false')
    navigator.clipboard.writeText(url)
    console.log(url);
    setCopied('true')
  }

  const toggleUpload = () => {
    setVisible(!visible);
  }

  return (
    <div>
      <CButton className='btn-primary' onClick={toggleUpload}>Upload Image</CButton>
      <br /><br />
      <CCollapse show={visible}>
        <CCard className="mt-3">
          <CCardBody>

            <CCard style={{ width: '50vw' }}>
              {
                (uploaded === 'true') ?
                  <div>
                    <CAlert
                      width="1"
                      color="success"
                    >
                      <strong>Uploaded</strong> Successfully...
              </CAlert>

                    <FlashMessage duration={3000}>
                      Uploaded Successfully...
            </FlashMessage>
                  </div>
                  :
                  <p></p>
              }
              <CCardBody>
                <CCardTitle>Upload Image</CCardTitle>

                <CListGroupItem>
                  <CProgress className="mb-3">
                    <CProgressBar value={progress}></CProgressBar>
                  </CProgress>
                  <progress value={progress} max="100" />
                </CListGroupItem>


                <CListGroupItem>
                  <input type="file" onChange={handleChange} />
                  <CButton  color="secondary" onClick={handleUpload} disabled={uploadBtnStateDisable}>Upload</CButton>
                  <CCardText>
                    <strong> Image URL: </strong>
                    {url}
                  </CCardText>
                </CListGroupItem>

                <CListGroupItem>
                  {
                    (copied === 'true') ?
                      <div>
                        <FlashMessage duration={2000}>
                          Copied To Clipboard...
            </FlashMessage>
                      </div>
                      :
                      <p></p>
                  }
                  <CButton color="secondary" onClick={copyToCLip}>Copy Image URL to Clipboard</CButton>
                </CListGroupItem>
              </CCardBody>
            </CCard>

            <img className="uploadedImg" src={url || "http://via.placeholder.com/300"} alt="firebase-image" />

          </CCardBody>
        </CCard>
      </CCollapse>
    </div>
  );
};

export default UploadImg
