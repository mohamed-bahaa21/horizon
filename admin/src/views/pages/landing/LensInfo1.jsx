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
  CToast
} from "@coreui/react";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from 'react-flash-message'

import SERVER_URI from "../../../reusable/api";

class LensInfo1 extends Component {
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

      li1_section_display: true,
      li1_header: "...",
      li1_desc: "...",
      li1_img: "...",
      li1_parag_1: "...",
      li1_parag_2: "...",
      li1_parag_3: "...",
      li1_parag_4: "..."
    };

    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensInfo1`)
      .then((response) => {
        // console.log(response.data);
        const {
          li1_section_display,
          li1_header,
          li1_desc,
          li1_img,
          li1_parag_1,
          li1_parag_2,
          li1_parag_3,
          li1_parag_4,
        } = response.data;
        this.setState({
          li1_section_display: li1_section_display,
          li1_header: li1_header,
          li1_desc: li1_desc,
          li1_img: li1_img,
          li1_parag_1: li1_parag_1,
          li1_parag_2: li1_parag_2,
          li1_parag_3: li1_parag_3,
          li1_parag_4: li1_parag_4,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange(e) {
    const value = e.target.value;
    console.log(value);
    this.setState({
      [e.target.name]: value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const prog_section = {
      li1_section_display: this.state.li1_section_display,
      li1_header: this.state.li1_header,
      li1_desc: this.state.li1_desc,
      li1_img: this.state.li1_img,
      li1_parag_1: this.state.li1_parag_1,
      li1_parag_2: this.state.li1_parag_2,
      li1_parag_3: this.state.li1_parag_3,
      li1_parag_4: this.state.li1_parag_4
    };

    axios.post(`${SERVER_URI}/api/postLensInfo1`, prog_section)
      .then(res => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/LensInfo1/`;
    this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      li1_section_display: !this.state.li1_section_display,
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
              <h4>{this.state.li1_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="li1_section_display"
                  name="li1_section_display"
                  checked={this.state.li1_section_display}
                  readOnly
                />_Show Section</a>
            </CFormGroup>
            <CFormGroup>
              {/* #1 name */}
              <h6>{this.state.li1_header}</h6>
              <CInput
                type="text"
                id="li1_header"
                name="li1_header"
                placeholder="li1_header"
                value={this.state.li1_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="li1_desc"
                name="li1_desc"
                placeholder="li1_desc"
                value={this.state.li1_desc}
                onChange={this.onChange}
              />
              <br />
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Image URL
              </CInputGroupText>
                <CInput
                  type="text"
                  id="li1_img"
                  name="li1_img"
                  placeholder="li1_img"
                  value={this.state.li1_img}
                  onChange={this.onChange}
                />
              </CInputGroup>
              <br />
              <CInput
                type="text"
                id="li1_parag_1"
                name="li1_parag_1"
                placeholder="li1_parag_1"
                value={this.state.li1_parag_1}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="li1_parag_2"
                name="li1_parag_2"
                placeholder="li1_parag_2"
                value={this.state.li1_parag_2}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="li1_parag_3"
                name="li1_parag_3"
                placeholder="li1_parag_3"
                value={this.state.li1_parag_3}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="li1_parag_3"
                name="li1_parag_3"
                placeholder="li1_parag_3"
                value={this.state.li1_parag_3}
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
      </CRow>
    );
  }
}

export default LensInfo1;
