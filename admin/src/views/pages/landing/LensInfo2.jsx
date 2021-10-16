import React, { Component } from "react";

import {
  CForm,
  CInput,
  CFormGroup,
  CCol,
  CRow,
  CAlert,
  CToast,
  CToaster,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";

import Accordion from "../../../reusable/Accordion/Accordion";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from "react-flash-message";

import SERVER_URI from "../../../reusable/api";

class LensInfo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
      edited: false,
      submitClass: "disabled",
      submitDisable: true,

      fixedToasts: 0,

      li2_section_display: true,
      li2_header: "...",
      li2_desc: "...",
      li2_image: "...",
      li2_lft_parags: [
        {
          parag_header: "",
          parag_content: "",
        },
      ],
      li2_rght_parags: [
        {
          parag_header: "",
          parag_content: "",
        },
      ],
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeLft = this.onChangeLft.bind(this);
    this.onChangeRght = this.onChangeRght.bind(this);
    this.addFixedToast = this.addFixedToast.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensInfo2`)
      .then((response) => {
        const {
          li2_section_display,
          li2_header,
          li2_desc,
          li2_image,
          li2_lft_parags,
          li2_rght_parags,
        } = response.data.section_content;
        this.setState({
          li2_section_display: li2_section_display,
          li2_header: li2_header,
          li2_desc: li2_desc,
          li2_image: li2_image,
          li2_lft_parags: li2_lft_parags,
          li2_rght_parags: li2_rght_parags,
        });

        console.log("REQ_STATE:: ", this.state);
        console.log("______________________________________");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(this.state);

    if (!this.state.submitDisable) {
      const prog_section = {
        li2_section_display: this.state.li2_section_display,
        li2_header: this.state.li2_header,
        li2_desc: this.state.li2_desc,
        li2_image: this.state.li2_image,
        li2_lft_parags: this.state.li2_lft_parags,
        li2_rght_parags: this.state.li2_rght_parags,
      };

      console.log("POST_STATE:: ", prog_section);

      axios
        .post(`${SERVER_URI}/api/postLensInfo2`, prog_section)
        .then((res) => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/LensInfo2/`;
      this.setState({
        edited: true,
        submitClass: "disabled",
        submitDisable: true,
      });
      this.addFixedToast();
    }
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

  onChangeLft(e, i) {
    const { value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState((prevState) => {
      const li2_lft_parags = [...prevState.li2_lft_parags];

      li2_lft_parags[i] = {
        ...li2_lft_parags[i],
        [name]: value,
      };

      return {
        submitClass: "primary",
        submitDisable: false,
        edited: false,
        li2_lft_parags,
      };
    });

    // console.log(this.state.ld2_designs[i]);
    // console.log(this.state);
  }

  onChangeRght(e, i) {
    const { value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState((prevState) => {
      const li2_rght_parags = [...prevState.li2_rght_parags];

      li2_rght_parags[i] = {
        ...li2_rght_parags[i],
        [name]: value,
      };

      return {
        submitClass: "primary",
        submitDisable: false,
        edited: false,
        li2_rght_parags,
      };
    });

    // console.log(this.state.ld2_designs[i]);
    // console.log(this.state);
  }

  addFixedToast() {
    console.log(this.state.fixedToasts);
    this.setState({
      fixedToasts: this.state.fixedToasts + 1,
    });
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      li2_section_display: !this.state.li2_section_display,
      submitClass: "primary",
      submitDisable: false,
      edited: false,
    });
  }

  render() {
    let listLft = this.state.li2_lft_parags.map((parag, parag_i) => (
      <div key={parag_i}>
        <Accordion
          title={`#${parag_i + 1} parag`}
          content={
            <div>
              {/* INPUT #1 Parag Header */}
              <CInput
                type="text"
                id="parag_header"
                name="parag_header"
                placeholder="parag_header"
                value={parag.parag_header}
                onChange={(event) => this.onChangeLft(event, parag_i)}
              />
              <br />
              {/* INPUT #2 Parag Content */}
              <CInput
                type="text"
                id="parag_content"
                name="parag_content"
                placeholder="parag_content"
                value={parag.parag_content}
                onChange={(event) => this.onChangeLft(event, parag_i)}
              />
              <br />
            </div>
          }
        />
      </div>
    ));

    let listRght = this.state.li2_rght_parags.map((parag, parag_i) => (
      <div key={parag_i}>
        <Accordion
          title={`#${parag_i + 1} parag`}
          content={
            <div>
              {/* INPUT #1 Parag Header */}
              <CInput
                type="text"
                id="parag_header"
                name="parag_header"
                placeholder="parag_header"
                value={parag.parag_header}
                onChange={(event) => this.onChangeRght(event, parag_i)}
              />
              <br />
              {/* INPUT #2 Parag Content */}
              <CInput
                type="text"
                id="parag_content"
                name="parag_content"
                placeholder="parag_content"
                value={parag.parag_content}
                onChange={(event) => this.onChangeRght(event, parag_i)}
              />
              <br />
            </div>
          }
        />
      </div>
    ));
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
              {/* Checkbox to Toggle Section */}

              {/* OLD CHECKBOX *RIP* */}
              {/* <h4>{this.state.li2_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="li2_section_display"
                  name="li2_section_display"
                  checked={this.state.li2_section_display}
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
                    checked={this.state.li2_section_display}
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
              {/* #1 Section Header */}
              <h6>{this.state.ld2_header}</h6>
              <CInput
                type="text"
                id="li2_header"
                name="li2_header"
                placeholder="li2_header"
                value={this.state.li2_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="li2_desc"
                name="li2_desc"
                placeholder="li2_desc"
                value={this.state.li2_desc}
                onChange={this.onChange}
              />
              <hr />

              <h6>Left Parags</h6>

              {listLft}

              <hr />

              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">Image URL</CInputGroupText>
                <CInput
                  type="text"
                  id="li2_image"
                  name="li2_image"
                  placeholder="li2_image"
                  value={this.state.li2_image}
                  onChange={this.onChange}
                />
              </CInputGroup>

              <hr />

              <h6>Right Parags</h6>

              {listRght}
            </CFormGroup>
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

        <br />
        <br />
        <br />
        <hr />

        <UploadImg />
      </CRow>
    );
  }
}

export default LensInfo2;
