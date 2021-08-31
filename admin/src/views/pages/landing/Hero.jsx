import React, { Component } from "react";
import {
  CForm,
  CInput,
  CTextarea,
  CFormText,
  CFormGroup,
  CCol,
  CRow,
  CInputGroup,
  CAlert,
  CToaster,
  CToast,
} from "@coreui/react";

import Accordion from "../../../reusable/Accordion/Accordion";
import FlashMessage from "react-flash-message";
import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";

import SERVER_URI from "../../../reusable/api";

let axiosDefaults = require("axios/lib/defaults");

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
      edited: false,
      submitClass: "disabled",
      submitDisable: true,

      csrfToken: "",
      hero_section_display: true,
      name: "...",
      hero_parag_1: "...",
      hero_header_1: "...",
      hero_parag_2: "...",
      hero_link_1_name: "...",
      hero_link_1_href: "...",
      design_state: true,
      design_img: "...",

      showLenses: false,
    };

    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getHeroData`)
      .then((response) => {
        // console.log("====================================");
        // console.log("server: ", SERVER_URI);
        // console.log(response);
        // console.log("====================================");
        // console.log(response.data[0]);
        const {
          name,
          hero_parag_1,
          hero_header_1,
          hero_parag_2,
          hero_link_1_name,
          hero_link_1_href,
          design_state,
          design_img,
        } = response.data;

        // const { csrfToken } = response.data;

        this.setState({
          name: name,
          hero_parag_1: hero_parag_1,
          hero_header_1: hero_header_1,
          hero_parag_2: hero_parag_2,
          hero_link_1_name: hero_link_1_name,
          hero_link_1_href: hero_link_1_href,
          design_state: design_state,
          design_img: design_img,
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

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      design_state: !this.state.design_state,
      submitClass: "primary",
      submitDisable: false,
      edited: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.submitDisable) {
      const hero_section = {
        name: this.state.name,
        hero_parag_1: this.state.hero_parag_1,
        hero_header_1: this.state.hero_header_1,
        hero_parag_2: this.state.hero_parag_2,
        hero_link_1_name: this.state.hero_link_1_name,
        hero_link_1_href: this.state.hero_link_1_href,
        design_state: this.state.design_state,
        design_img: this.state.design_img,
      };

      axios
        .post(`${SERVER_URI}/api/postHeroData`, hero_section)
        .then((res) => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/hero/`;
      this.setState({
        edited: true,
        submitClass: "disabled",
        submitDisable: true,
      });
    }
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
              {/* #1 name */}
              <h6>{this.state.name}</h6>
              {/* <CLabel htmlFor="name">name</CLabel> */}

              <CInput
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <CFormText className="help-block">Please enter name</CFormText>
            </CFormGroup>

            <Accordion
              title="Content"
              content={
                <div>
                  <CFormGroup>
                    {/* #2 */}
                    {/* <CLabel htmlFor="hero_parag_1">hero_parag_1</CLabel> */}
                    <CInput
                      type="text"
                      id="hero_parag_1"
                      name="hero_parag_1"
                      placeholder="hero_parag_1"
                      value={this.state.hero_parag_1}
                      onChange={this.onChange}
                    />
                  </CFormGroup>

                  <CFormGroup>
                    {/* #3 */}
                    {/* <CLabel htmlFor="hero_header_1">hero_header_1</CLabel> */}
                    <CInput
                      type="text"
                      id="hero_header_1"
                      name="hero_header_1"
                      placeholder="hero_header_1"
                      value={this.state.hero_header_1}
                      onChange={this.onChange}
                    />
                  </CFormGroup>

                  <CFormGroup>
                    {/* #4 */}
                    {/* <CLabel htmlFor="hero_parag_2">hero_parag_2</CLabel> */}
                    <CTextarea
                      type="text"
                      id="hero_parag_2"
                      name="hero_parag_2"
                      placeholder="hero_parag_2"
                      value={this.state.hero_parag_2}
                      onChange={this.onChange}
                    />
                  </CFormGroup>

                  <CFormGroup>
                    {/* #5 */}
                    {/* <CLabel htmlFor="hero_link_1_name">hero_link_1_name</CLabel> */}
                    <CInput
                      type="text"
                      id="hero_link_1_name"
                      name="hero_link_1_name"
                      placeholder="hero_link_1_name"
                      value={this.state.hero_link_1_name}
                      onChange={this.onChange}
                    />
                  </CFormGroup>

                  <CFormGroup>
                    <CInputGroup className="mb-3">
                      {/* #6 */}
                      {/* <CLabel htmlFor="hero_link_1_href">hero_link_1_href</CLabel> */}
                      <CInput
                        type="text"
                        id="hero_link_1_href"
                        name="hero_link_1_href"
                        placeholder="hero_link_1_href"
                        value={this.state.hero_link_1_href}
                        onChange={this.onChange}
                      />
                    </CInputGroup>
                  </CFormGroup>
                </div>
              }
            />

            <br />
            <hr />
            <br />

            <Accordion
              title="Design"
              content={
                <div>
                  <CFormGroup>
                    {/* #1 */}
                    {/* Checkbox to show the lenses design */}
                    {/* <h4>{this.state.design_state ? "Show" : "hide"}</h4> */}

                    {/* OLD CHECKBOX *RIP* */}
                    {/* <a href="#" role="button" onClick={this.toggleCheckbox}>
                      <input
                        type="checkbox"
                        title="design_state"
                        name="design_state"
                        checked={this.state.design_state}
                        readOnly
                      />
                      Show Lenses Design
                    </a> */}

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
                          checked={this.state.design_state}
                          readOnly
                        />
                        <span className="label__text">
                          <span className="label__check">
                            <i className="fa fa-check icon"></i>
                          </span>
                        </span>
                        <label className="show_design_label" htmlFor="show_design">
                          Show Lenses Design
                        </label>
                      </label>
                    </a>
                  </CFormGroup>

                  <CFormGroup>
                    {/* #2 */}
                    {/* Image URL */}
                    <CInput
                      type="text"
                      id="design_img"
                      name="design_img"
                      placeholder="design_img"
                      value={this.state.design_img}
                      onChange={this.onChange}
                      disabled={this.state.design_state}
                    />
                  </CFormGroup>
                </div>
              }
            />

            <br />
            <hr />
            <br />

            <CFormGroup>
              {/* #6 */}
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
          {/* {this.displayarag()} */}
        </CCol>
      </CRow>
    );
  }
}

export default Hero;
