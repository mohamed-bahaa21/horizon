import React, { Component } from "react";

import {
  CLabel,
  CForm,
  CInput,
  CInputFile,
  CTextarea,
  CFormText,
  CFormGroup,
  CButton,
  CCol,
  CRow,
  CAlert,
  CCollapse,
  CCard,
  CCardBody,
} from "@coreui/react";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from 'react-flash-message'

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

// for functional component

// const [image, setImage] = useState(null);
// const [url, setUrl] = useState("");
// const [progress, setProgress] = useState(0);

class LensDesigns1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      activeKey: 0,
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,
      image: "...",
      url: "...",
      progress: "...",
      name: "...",
      prog_card_1_img: "...",
      prog_card_1_link: "...",
      prog_card_1_type: "...",
      prog_card_1_header: "..."
    };

    this.onChange_prog_card_1_img = this.onChange_prog_card_1_img.bind(this);
    this.onChange_prog_card_1_link = this.onChange_prog_card_1_link.bind(this);
    this.onChange_prog_card_1_type = this.onChange_prog_card_1_type.bind(this);
    this.onChange_prog_card_1_header = this.onChange_prog_card_1_header.bind(
      this
    );

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getProgData`)
      .then((response) => {
        // console.log(response.data);
        const {
          name,
          prog_card_1_img,
          prog_card_1_link,
          prog_card_1_type,
          prog_card_1_header
        } = response.data;
        this.setState({
          name: name,
          prog_card_1_img: prog_card_1_img,
          prog_card_1_link: prog_card_1_link,
          prog_card_1_type: prog_card_1_type,
          prog_card_1_header: prog_card_1_header
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange_prog_card_1_img(e) {
    this.setState({
      prog_card_1_img: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }
  onChange_prog_card_1_link(e) {
    this.setState({
      prog_card_1_link: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  onChange_prog_card_1_type(e) {
    this.setState({
      prog_card_1_type: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  onChange_prog_card_1_header(e) {
    this.setState({
      prog_card_1_header: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const prog_section = {
      name: this.state.name,
      prog_card_1_img: this.state.prog_card_1_img,
      prog_card_1_link: this.state.prog_card_1_link,
      prog_card_1_type: this.state.prog_card_1_type,
      prog_card_1_header: this.state.prog_card_1_header
    };

    axios.post(`${SERVER_URI}/api/postProgData`, prog_section)
      .then(res => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/LensDesigns1/`;
    this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
  }

  // Using imgbb for image hosting 
  // onSubmitImgFile(e) {
  //   e.preventDefault();

  //   axios
  //     .post(`https://api.imgbb.com/1/upload?expiration=600&key=5654e1ea6c180344bb90d5fad457ef02`)
  //     .then((res) => console.log(res));

  //   window.location = `${ADMIN_URI}/#/landing/LensDesigns1/`;
  // }

  render() {
    return (
      <CRow>
        {
          (this.state.edited == true) ?
            <div>
              <FlashMessage duration={3000}>
                <CAlert
                  width="1"
                  color="success"
                  dismissible={true}
                >
                  <strong>Uploaded</strong> Successfully...
              </CAlert>
              </FlashMessage>
            </div>
            :
            <p></p>
        }
        <CCol xs="12">
          <CForm onSubmit={this.onSubmit}>
            <CFormGroup>
              {/* #1 name */}
              <h6>{this.state.name}</h6>
              <CInput
                type="text"
                id="prog_card_1_img"
                name="prog_card_1_img"
                placeholder="prog_card_1_img"
                value={this.state.prog_card_1_img}
                onChange={this.onChange_prog_card_1_img}
              />
              <br />
              <CInput
                type="text"
                id="prog_card_1_link"
                name="prog_card_1_link"
                placeholder="prog_card_1_link"
                value={this.state.prog_card_1_link}
                onChange={this.onChange_prog_card_1_link}
              />
              <br />
              <CInput
                type="text"
                id="prog_card_1_type"
                name="prog_card_1_type"
                placeholder="prog_card_1_type"
                value={this.state.prog_card_1_type}
                onChange={this.onChange_prog_card_1_type}
              />
              <br />
              <CInput
                type="text"
                id="prog_card_1_header"
                name="prog_card_1_header"
                placeholder="prog_card_1_header"
                value={this.state.prog_card_1_header}
                onChange={this.onChange_prog_card_1_header}
              />
            </CFormGroup>

            <hr />
            <br />

            <CFormGroup>
            <CInput
                type="submit"
                id="submit"
                name="submit"
                placeholder="submit"
                className={`bg-${this.state.submitClass} text-white bold`}
                value="SUBMIT"
                disabled={this.state.submitDisable}
              />
            </CFormGroup>
          </CForm>
        </CCol>

        <UploadImg />

        {/* <CCol>
          <CForm onSubmit={this.onSubmitImgFile}>
            <CInputFile name="prog_card_1_imgfile" />
            <CInput
              type="submit"
              id="submit"
              name="submit"
              placeholder="submit"
              className="bg-primary text-white bold"
              value="SUBMIT"
            />
          </CForm>
        </CCol> */}
      </CRow>
    );
  }
}

export default LensDesigns1;
