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
  CInputGroupText,
  CInputGroup,
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
      activeKey: 0,
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,

      ld2_header: "...",
      ld2_desc: "...",
      ld2_designs: [
        {
          header: 'header',
        }
      ]
    };

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensDesigns2`)
      .then((response) => {
        // console.log(response.data);
        const {
          ld2_header,
          ld2_desc,
          ld2_designs,
        } = response.data;
        this.setState({
          ld2_header: ld2_header,
          ld2_desc: ld2_desc,
          ld2_designs: ld2_designs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const prog_section = {
      ld2_header: this.state.ld2_header,
      ld2_desc: this.state.ld2_desc,
      ld2_designs: this.state.ld2_designs,
    };

    axios.post(`${SERVER_URI}/api/postLensDesigns2`, prog_section)
      .then(res => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/LensDesigns1/`;
    this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
  }

  render() {
    const listDesigns = this.state.ld2_designs.map(design => {
      <div>
        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            Paste Image URL
              </CInputGroupText>
          <CInput
            type="text"
            id={design.img}
            name={design.img}
            placeholder={design.img}
            value={design.img}
            onChange={this.onChange_prog_card_1_img}
          />
        </CInputGroup>
        <br />
        <CInput
          type="text"
          id={design.header}
          name={design.header}
          placeholder={design.header}
          value={design.header}
          onChange={this.onChange_prog_card_1_link}
        />
      </div>
    })
    return (
      <CRow>
        {
          (this.state.edited === true) ?
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
              {listDesigns}
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
      </CRow>
    );
  }
}

export default LensDesigns1;
