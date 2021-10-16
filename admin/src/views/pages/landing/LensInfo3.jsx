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
  CTextarea,
} from "@coreui/react";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from "react-flash-message";

import SERVER_URI from "../../../reusable/api";

class LensInfo3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      activeKey: 0,
      edited: false,
      submitClass: "disabled",
      submitDisable: true,

      image: "...",
      url: "...",
      progress: "...",

      li3_section_display: true,
      li3_header: "...",
      li3_desc: "...",
      li3_img: "...",
      li3_parag_1: "...",
      li3_parag_2: "...",
      li3_parag_3: "...",
      li3_parag_4: "...",
      li3_parag_5: "...",
      li3_parag_6: "...",
    };

    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensInfo3`)
      .then((response) => {
        // console.log(response.data);
        const {
          li3_section_display,
          li3_header,
          li3_desc,
          li3_img,
          li3_parag_1,
          li3_parag_2,
          li3_parag_3,
          li3_parag_4,
          li3_parag_5,
          li3_parag_6,
        } = response.data.section_content;
        this.setState({
          li3_section_display: li3_section_display,
          li3_header: li3_header,
          li3_desc: li3_desc,
          li3_img: li3_img,
          li3_parag_1: li3_parag_1,
          li3_parag_2: li3_parag_2,
          li3_parag_3: li3_parag_3,
          li3_parag_4: li3_parag_4,
          li3_parag_5: li3_parag_5,
          li3_parag_6: li3_parag_6,
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
      submitClass: "primary",
      submitDisable: false,
      edited: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const prog_section = {
      li3_section_display: this.state.li3_section_display,
      li3_header: this.state.li3_header,
      li3_desc: this.state.li3_desc,
      li3_img: this.state.li3_img,
      li3_parag_1: this.state.li3_parag_1,
      li3_parag_2: this.state.li3_parag_2,
      li3_parag_3: this.state.li3_parag_3,
      li3_parag_4: this.state.li3_parag_4,
      li3_parag_5: this.state.li3_parag_5,
      li3_parag_6: this.state.li3_parag_6,
    };

    axios
      .post(`${SERVER_URI}/api/postLensInfo3`, prog_section)
      .then((res) => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/LensInfo1/`;
    this.setState({
      edited: true,
      submitClass: "disabled",
      submitDisable: true,
    });
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      li3_section_display: !this.state.li3_section_display,
      submitClass: "primary",
      submitDisable: false,
      edited: false,
    });
  }

  render() {
    return (
      <CRow>
        {this.state.edited === true ? (
          <div>
            <FlashMessage duration={3000} />
            <CToaster>
              <CToast
                key={this.state.fixedToasts}
                show={true}
                autohide={1000}
                fade={true}
                header="CToast fixed component"
              >
                <CAlert width="1" color="success" dismissible={`${true}`}>
                  <strong>Updated</strong> Successfully...
                </CAlert>
              </CToast>
            </CToaster>
          </div>
        ) : (
          <p></p>
        )}

        <CCol xs="12">
          <CForm onSubmit={this.onSubmit}>
            <CFormGroup>
              {/* #1 */}
              {/* Checkbox to Toggle Sections */}
              {/* OLD CHECKBOX *RIP* */}
              {/* <h4>{this.state.li3_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="li3_section_display"
                  name="li3_section_display"
                  checked={this.state.li3_section_display}
                  readOnly
                />_Show Section</a> */}
              {/* <h4>{this.state.design_state ? "Show" : "hide"}</h4> */}

              {/* NEW LOOK - it's all about that */}
              <a
                className="show_design_link"
                href="#"
                role="button"
                onClick={this.toggleCheckbox}
              >
                <label className="show_design">
                  <input
                    className="label__checkbox"
                    id="show_design"
                    name="show_design"
                    type="checkbox"
                    checked={this.state.li3_section_display}
                    readOnly
                  />
                  <span className="label__text">
                    <span className="label__check">
                      <i className="fa fa-check icon"></i>
                    </span>
                  </span>
                  <label className="show_design_label" htmlFor="show_design">
                    Show Section
                  </label>
                </label>
              </a>
            </CFormGroup>
            <CFormGroup>
              {/* #1 name */}
              <h6>{this.state.li3_header}</h6>
              <CInput
                type="text"
                id="li3_header"
                name="li3_header"
                placeholder="li3_header"
                value={this.state.li3_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="li3_desc"
                name="li3_desc"
                placeholder="li3_desc"
                value={this.state.li3_desc}
                onChange={this.onChange}
              />
              <br />
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Image URL
                </CInputGroupText>
                <CInput
                  type="text"
                  id="li3_img"
                  name="li3_img"
                  placeholder="li3_img"
                  value={this.state.li3_img}
                  onChange={this.onChange}
                />
              </CInputGroup>
              <br />
              <hr />

              <h6 className="badgeee">Top Left Parag</h6>
              <CInput
                type="text"
                id="li3_parag_1"
                name="li3_parag_1"
                placeholder="li3_parag_1"
                value={this.state.li3_parag_1}
                onChange={this.onChange}
              />
              <br />
              <hr />

              <h6 className="badgeee">Top Right Parag</h6>
              <CInput
                type="text"
                id="li3_parag_2"
                name="li3_parag_2"
                placeholder="li3_parag_2"
                value={this.state.li3_parag_2}
                onChange={this.onChange}
              />
              <br />
              <hr />

              <h6 className="badgeee">Left Parag</h6>
              <CInput
                type="text"
                id="li3_parag_3"
                name="li3_parag_3"
                placeholder="li3_parag_3"
                value={this.state.li3_parag_3}
                onChange={this.onChange}
              />
              <br />
              <hr />

              <h6 className="badgeee">Right Parag</h6>
              <CInput
                type="text"
                id="li3_parag_4"
                name="li3_parag_4"
                placeholder="li3_parag_4"
                value={this.state.li3_parag_4}
                onChange={this.onChange}
              />
              <br />
              <hr />

              <h6 className="badgeee">Bottom Left Parag</h6>
              <CInput
                type="text"
                id="li3_parag_5"
                name="li3_parag_5"
                placeholder="li3_parag_5"
                value={this.state.li3_parag_5}
                onChange={this.onChange}
              />
              <br />
              <hr />

              <h6 className="badgeee">Bottom Right Parag</h6>
              <CInput
                type="text"
                id="li3_parag_6"
                name="li3_parag_6"
                placeholder="li3_parag_6"
                value={this.state.li3_parag_6}
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

export default LensInfo3;
