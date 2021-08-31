import React, { Component } from "react";

import {
  CCol,
  CRow,
  CAlert,
  CImg,
  CTooltip,
  CToaster,
  CToast,
} from "@coreui/react";

import UploadImg from "../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from "react-flash-message";

import SERVER_URI from "../../reusable/api";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "...",
      copied: false,
      imgs: [],
    };
  }

  getGallery = () => {
    axios
      .get(`${SERVER_URI}/api/gallery`)
      .then((response) => {
        const gallery = response.data;
        let lista = [];
        console.log(gallery[0]);

        gallery.map((img) => {
          lista.push(img);
          return lista;
        });

        this.setState({
          imgs: lista,
        });

        console.log(this.state.imgs);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  copyToCLip = (e) => {
    this.setState({
      copied: true,
    });

    const url = e.target.id;
    navigator.clipboard.writeText(url);

    console.log("====================================");
    console.log("URL: ", url);
    console.log("copied: ", this.state.copied);
    console.log("====================================");
  };

  componentDidMount() {
    this.getGallery();
  }

  render() {
    const listImgs = this.state.imgs.map((img) => (
      <div>
        <CTooltip content="Click to Copy URL" placement="top">
          <CImg
            key={img._id}
            id={img.img_url}
            src={img.img_url}
            className="img-thumbnail"
            thumbnail
            width="30%"
            onClick={this.copyToCLip}
          />
        </CTooltip>
        <hr />
      </div>
    ));
    return (
      <CRow>
        {this.state.copied === true ? (
          <div>
            <FlashMessage duration={3000}></FlashMessage>
            <CToaster>
              <CToast
                key={this.state.fixedToasts}
                show={true}
                autohide={1000}
                fade={true}
                header="CToast fixed component"
              >
                <CAlert width="1" color="success" dismissible={`${true}`}>
                  <strong>Copied</strong> Successfully...
                </CAlert>
              </CToast>
            </CToaster>
          </div>
        ) : (
          <p></p>
        )}

        {this.state.edited === true ? (
          <div>
            <FlashMessage duration={3000}>
              <CAlert width="1" color="success" dismissible={true}>
                <strong>Uploaded</strong> Successfully...
              </CAlert>
            </FlashMessage>
          </div>
        ) : (
          <p></p>
        )}
        <CCol xs="12">{listImgs}</CCol>

        <UploadImg />
      </CRow>
    );
  }
}

export default Gallery;
