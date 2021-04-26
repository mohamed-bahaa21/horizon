import React, { Component } from "react";

import {
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
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

import Accordion from "../../../reusable/Accordion/Accordion";

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

class LensInfo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,

      li2_header: "...",
      li2_desc: "...",
      li2_lft_parags: [{
        parag_header: '',
        parag_content: '',
      }],
      li2_rght_parags: [{
        parag_header: '',
        parag_content: '',
      }]
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeLft = this.onChangeLft.bind(this);
    this.onChangeRght = this.onChangeRght.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensInfo2`)
      .then((response) => {
        const {
          li2_header,
          li2_desc,
          li2_lft_parags,
          li2_rght_parags,
        } = response.data;
        this.setState({
          li2_header: li2_header,
          li2_desc: li2_desc,
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
        li2_header: this.state.li2_header,
        li2_desc: this.state.li2_desc,
        li2_lft_parags: this.state.li2_lft_parags,
        li2_rght_parags: this.state.li2_rght_parags,
      };

      console.log("POST_STATE:: ", prog_section);

      axios.post(`${SERVER_URI}/api/postLensInfo2`, prog_section)
        .then(res => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/LensInfo2/`;
      this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })

    }
  }

  onChange(e) {
    const { id, name, value } = e.target;

    this.setState({
      [name]: value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
    // console.log(this.state);
  }

  onChangeLft(e, i) {
    const { id, value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState(prevState => {
      const li2_lft_parags = [...prevState.li2_lft_parags]

      li2_lft_parags[i] = {
        ...li2_lft_parags[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        li2_lft_parags,
      }
    })

    // console.log(this.state.ld2_designs[i]);
    // console.log(this.state);
  }

  onChangeRght(e, i) {
    const { id, value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState(prevState => {
      const li2_rght_parags = [...prevState.li2_rght_parags]

      li2_rght_parags[i] = {
        ...li2_rght_parags[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        li2_rght_parags,
      }
    })

    // console.log(this.state.ld2_designs[i]);
    // console.log(this.state);
  }


  render() {
    let listLft = this.state.li2_lft_parags.map((parag, parag_i) =>
      <div key={parag_i}>
        <Accordion
          title="Accordion Title"
          content={
            <div>
              {/* INPUT #1 Parag Header */}
              <CInput
                type="text"
                id="parag_header"
                name="parag_header"
                placeholder="parag_header"
                value={parag.parag_header}
                onChange={event => this.onChangeDesign(event, parag_i)}
              />
              <br />
              {/* INPUT #2 Parag Content */}
              <CInput
                type="text"
                id="parag_content"
                name="parag_content"
                placeholder="parag_content"
                value={parag.parag_content}
                onChange={event => this.onChangeDesign(event, parag_i)}
              />
              <br />
            </div>
          }
        />
        <hr />
      </div>
    )

    let listRght = this.state.li2_rght_parags.map((parag, parag_i) =>
      <div key={parag_i}>
        <Accordion
          title="Accordion Title"
          content={
            <div>
              {/* INPUT #1 Parag Header */}
              <CInput
                type="text"
                id="parag_header"
                name="parag_header"
                placeholder="parag_header"
                value={parag.parag_header}
                onChange={event => this.onChangeDesign(event, parag_i)}
              />
              <br />
              {/* INPUT #2 Parag Content */}
              <CInput
                type="text"
                id="parag_content"
                name="parag_content"
                placeholder="parag_content"
                value={parag.parag_content}
                onChange={event => this.onChangeDesign(event, parag_i)}
              />
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
                <CAlert
                  width="1"
                  color="success"
                  dismissible={`${true}`}
                >
                  <strong>Updated</strong> Successfully...
              </CAlert>
              </FlashMessage>
            </div>
            :
            <p></p>
        }

        <CCol xs="12">
          <CForm onSubmit={this.onSubmit}>
            <CFormGroup>
              {/* #1 Section Header */}
              <h6>{this.state.ld2_header}</h6>
              <CInput
                type="text"
                id='li2_header'
                name='li2_header'
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

              {listLft}
              
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
        <br /><br />
        <hr />

        <UploadImg />
      </CRow>
    );
  }
}

export default LensInfo2;
