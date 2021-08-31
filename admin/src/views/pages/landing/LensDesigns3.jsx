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

import Accordion from "../../../reusable/Accordion/Accordion";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from 'react-flash-message'

import SERVER_URI from "../../../reusable/api";

class LensDesigns3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,

      ld3_section_display: true,
      ld3_header: "...",
      ld3_desc: "...",
      ld3_imgs: [{
        img_title: "...",
        img_sub: "...",
        img_link: "..."
      }]
    };

    this.onChangeImg = this.onChangeImg.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensDesigns3`)
      .then((response) => {
        const {
          ld3_section_display,
          ld3_header,
          ld3_desc,
          ld3_imgs,
        } = response.data;
        this.setState({
          ld3_section_display: ld3_section_display,
          ld3_header: ld3_header,
          ld3_desc: ld3_desc,
          ld3_imgs: ld3_imgs,
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
        ld3_section_display: this.state.ld3_section_display,
        ld3_header: this.state.ld3_header,
        ld3_desc: this.state.ld3_desc,
        ld3_imgs: this.state.ld3_imgs,
      };

      console.log("POST_STATE:: ", prog_section);

      axios.post(`${SERVER_URI}/api/postLensDesigns3`, prog_section)
        .then(res => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/LensDesigns3/`;
      this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })

    }
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

  onChangeImg(e, i) {
    const { value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState(prevState => {
      const ld3_imgs = [...prevState.ld3_imgs]

      ld3_imgs[i] = {
        ...ld3_imgs[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        ld3_imgs,
      }
    })

    // console.log(this.state.ld3_imgs[i]);
    // console.log(this.state);
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      ld3_section_display: !this.state.ld3_section_display,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  render() {
    let listImgs = this.state.ld3_imgs.map((img, img_i) =>
      <div key={img_i}>
        <Accordion
          title="Design Img"
          content={
            <div>
              {/* INPUT #1 IMG Title */}
              <CInput
                type="text"
                id="img_title"
                name="img_title"
                placeholder="img_title"
                value={img.img_title}
                onChange={event => this.onChangeImg(event, img_i)}
              />
              <br />
              {/* INPUT #2 IMG Sub title */}
              <CInput
                type="text"
                id="img_sub"
                name="img_sub"
                placeholder="img_sub"
                value={img.img_sub}
                onChange={event => this.onChangeImg(event, img_i)}
              />
              {/* INPUT #1 IMG Link*/}
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Image URL
                </CInputGroupText>
                <CInput
                  type="text"
                  placeholder="img_link"
                  name="img_link"
                  value={img.img_link}
                  onChange={event => this.onChangeImg(event, img_i)}
                />
              </CInputGroup>
              <br />
            </div>
          }
        />
        <hr />
      </div>
    )
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

              {/* OLD CHECKBOX *RIP* */}
              {/* <h4>{this.state.ld3_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="ld3_section_display"
                  name="ld3_section_display"
                  checked={this.state.ld3_section_display}
                  readOnly
                />_Show Section</a> */}
              {/* <h4>{this.state.design_state ? "Show" : "hide"}</h4> */}

              {/* NEW LOOK - it's all about that */}
              <a className="show_design_link" href="#" role="button" onClick={this.toggleCheckbox}>
                <label className="show_design">
                  <input className="label__checkbox" id="show_design" name="show_design" type="checkbox" checked={this.state.ld3_section_display} readOnly />
                  <span className="label__text">
                    <span className="label__check">
                      <i className="fa fa-check icon"></i>
                    </span>
                  </span>
                  <label className="show_design_label" htmlFor="show_design">Show Section</label>
                </label>
              </a>
            </CFormGroup>

            <CFormGroup>
              {/* #1 Section Header */}
              <h6>{this.state.ld3_header}</h6>
              <CInput
                type="text"
                id='ld3_header'
                name='ld3_header'
                placeholder="ld3_header"
                value={this.state.ld3_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="ld3_desc"
                name="ld3_desc"
                placeholder="ld3_desc"
                value={this.state.ld3_desc}
                onChange={this.onChange}
              />
              <hr />
              {/* {this.state.ld3_imgs[0].sub_header} */}

              {listImgs}

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
        <br /><br />
        <hr />

        <UploadImg />
      </CRow>
    );
  }
}

export default LensDesigns3;
