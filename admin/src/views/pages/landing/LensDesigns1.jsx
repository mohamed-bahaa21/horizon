import React, { Component } from "react";

import {
  CForm,
  CInput,
  CFormGroup,
  CCol,
  CRow,
  CAlert,
  CInputGroupText,
  CInputGroup,
  CToaster,
  CToast,
} from "@coreui/react";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from 'react-flash-message'

var SERVER_URI = "http://localhost:5000";

if (process.env.NODE_ENV === "development") {
  SERVER_URI = "http://localhost:5000";
}

if (process.env.NODE_ENV === "production") {
  SERVER_URI = "https://horizon-server.herokuapp.com";
}

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

      ld1_section_display: true,
      name: "...",
      prog_card_1_img: "...",
      prog_card_1_link: "...",
      prog_card_1_type: "...",
      prog_card_1_header: "..."
    };

    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensDesigns1`)
      .then((response) => {
        // console.log(response.data);
        const {
          ld1_section_display,
          name,
          prog_card_1_img,
          prog_card_1_link,
          prog_card_1_type,
          prog_card_1_header
        } = response.data;

        this.setState({
          ld1_section_display: ld1_section_display,
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

  onChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
    // console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    const prog_section = {
      name: this.state.name,
      ld1_section_display: this.state.ld1_section_display,
      prog_card_1_img: this.state.prog_card_1_img,
      prog_card_1_link: this.state.prog_card_1_link,
      prog_card_1_type: this.state.prog_card_1_type,
      prog_card_1_header: this.state.prog_card_1_header
    };

    console.log(prog_section);

    axios.post(`${SERVER_URI}/api/postLensDesigns1`, prog_section)
      .then(res => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/LensDesigns1/`;
    this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      ld1_section_display: !this.state.ld1_section_display,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  render() {
    return (
      <CRow>
        {
          (this.state.edited === true) ?
            <div>
              <FlashMessage duration={3000}>
              </FlashMessage>
              <CToaster>
                <CToast
                  key={this.state.fixedToasts}
                  show={true}
                  autohide={1000}
                  fade={true}
                  header="CToast fixed component"
                >
                  <CAlert
                    width="1"
                    color="success"
                    dismissible={`${true}`}
                  >
                    <strong>Updated</strong> Successfully...
                    </CAlert>
                </CToast>
              </CToaster >
            </div>
            :
            <p></p>
        }

        <CCol xs="12">
          <CForm onSubmit={this.onSubmit}>

            <CFormGroup>
              {/* #1 */}
              {/* Checkbox to Toggle Sections */}
              <h4>{this.state.ld1_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="ld1_section_display"
                  name="ld1_section_display"
                  checked={this.state.ld1_section_display}
                  readOnly
                />_Show Section</a>
            </CFormGroup>

            <CFormGroup>
              {/* #1 name */}
              <h6>{this.state.name}</h6>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Image URL
              </CInputGroupText>
                <CInput
                  type="text"
                  id="prog_card_1_img"
                  name="prog_card_1_img"
                  placeholder="prog_card_1_img"
                  value={this.state.prog_card_1_img}
                  onChange={this.onChange}
                />
              </CInputGroup>
              <br />
              <CInput
                type="text"
                id="prog_card_1_link"
                name="prog_card_1_link"
                placeholder="prog_card_1_link"
                value={this.state.prog_card_1_link}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="prog_card_1_type"
                name="prog_card_1_type"
                placeholder="prog_card_1_type"
                value={this.state.prog_card_1_type}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="prog_card_1_header"
                name="prog_card_1_header"
                placeholder="prog_card_1_header"
                value={this.state.prog_card_1_header}
                onChange={this.onChange}
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
