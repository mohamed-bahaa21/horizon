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
import FlashMessage from "react-flash-message";

import SERVER_URI from "../../../reusable/api";

class WatchVideo extends Component {
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

      wv_section_display: true,
      wv_header: "...",
      wv_desc: "...",
      wv_link: "...",
    };

    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getWatchVideo`)
      .then((response) => {
        // console.log(response.data);
        const { wv_section_display, wv_header, wv_desc, wv_link } =
          response.data.section_content;

        this.setState({
          wv_section_display: wv_section_display,
          wv_header: wv_header,
          wv_desc: wv_desc,
          wv_link: wv_link,
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
      submitClass: "primary",
      submitDisable: false,
      edited: false,
    });
    // console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    const prog_section = {
      wv_section_display: this.state.wv_section_display,
      wv_header: this.state.wv_header,
      wv_desc: this.state.wv_desc,
      wv_link: this.state.wv_link,
    };

    console.log(prog_section);

    axios
      .post(`${SERVER_URI}/api/postWatchVideo`, prog_section)
      .then((res) => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/WatchVideo/`;
    this.setState({
      edited: true,
      submitClass: "disabled",
      submitDisable: true,
    });
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      wv_section_display: !this.state.wv_section_display,
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
              {/* <h4>{this.state.wv_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="wv_section_display"
                  name="wv_section_display"
                  checked={this.state.wv_section_display}
                  readOnly
                />_Show Section</a> */}

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
                    checked={this.state.wv_section_display}
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
              <h6>{this.state.wv_header}</h6>
              <br />
              <CInput
                type="text"
                id="wv_header"
                name="wv_header"
                placeholder="wv_header"
                value={this.state.wv_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="wv_desc"
                name="wv_desc"
                placeholder="wv_desc"
                value={this.state.wv_desc}
                onChange={this.onChange}
              />
              <br />
              <hr />
              <br />
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Video URL
                </CInputGroupText>
                <CInput
                  type="text"
                  id="wv_link"
                  name="wv_link"
                  placeholder="wv_link"
                  value={this.state.wv_link}
                  onChange={this.onChange}
                />
              </CInputGroup>
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
      </CRow>
    );
  }
}

export default WatchVideo;
