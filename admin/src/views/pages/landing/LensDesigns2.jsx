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
      ld2_designs: [{
        img: '',
        header: '',
        sub_header: '',
        content_before: '',
        content_after: '',
      }]
    };

    this.onChangeDesign = this.onChangeDesign.bind(this);
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensDesigns2`)
      .then((response) => {
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

    if(!this.state.submitDisable) {
      const prog_section = {
        ld2_header: this.state.ld2_header,
        ld2_desc: this.state.ld2_desc,
        ld2_designs: this.state.ld2_designs,
      };
  
      console.log("POST_STATE:: ", prog_section);
  
      axios.post(`${SERVER_URI}/api/postLensDesigns2`, prog_section)
        .then(res => console.log(res));
  
      // window.location = `${ADMIN_URI}/#/landing/LensDesigns1/`;
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

  onChangeDesign(e, i) {
    const { id, value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState(prevState => {
      const ld2_designs = [...prevState.ld2_designs]

      ld2_designs[i] = {
        ...ld2_designs[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        ld2_designs,
      }
    })

    // console.log(this.state.ld2_designs[i]);
    // console.log(this.state);
  }

  render() {
    let listDesigns = this.state.ld2_designs.map((design, index) =>
      <div key={index}>
        <Accordion
          title="Accordion Title"
          content={
            <div>
              {/* INPUT #1 Design IMG */}
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Image URL
              </CInputGroupText>
                <CInput
                  type="text"
                  placeholder="design_img"
                  name="img"
                  value={design.img}
                  onChange={event => this.onChangeDesign(event, index)}
                />
              </CInputGroup>
              <br />
              {/* INPUT #2 Design header */}
              <CInput
                type="text"
                id="header"
                name="header"
                placeholder="header"
                value={design.header}
                onChange={event => this.onChangeDesign(event, index)}
              />
              <br />
              {/* INPUT #3 Design sub_header */}
              <CInput
                type="text"
                id="sub_header"
                name="sub_header"
                placeholder="sub_header"
                value={design.sub_header}
                onChange={event => this.onChangeDesign(event, index)}
              />
              <br />
              {/* INPUT #4 Design content_before */}
              <CInput
                type="text"
                id="content_before"
                name="content_before"
                placeholder="content_before"
                value={design.content_before}
                onChange={event => this.onChangeDesign(event, index)}
              />
              <br />
              {/* INPUT #5 Design content_after */}
              <CInput
                type="text"
                id="content_after"
                name="content_after"
                placeholder="content_after"
                value={design.content_after}
                onChange={event => this.onChangeDesign(event, index)}
              />
              <br />
              {/* {design.specs.map(spec =>
          <div key={spec._id}>
            <CInput
              type="text"
              id="design_spec_title"
              name="design_spec_title"
              placeholder="design_spec_title"
              value={spec.title}
              onChange={this.onChange}
            />
            <CInput
              type="text"
              id="design_spec_desc"
              name="design_spec_desc"
              placeholder="design_spec_desc"
              value={spec.desc}
              onChange={this.onChange}
            />
          </div>
        )} */}
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
                id='ld2_header'
                name='ld2_header'
                placeholder="ld2_header"
                value={this.state.ld2_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="ld2_desc"
                name="ld2_desc"
                placeholder="ld2_desc"
                value={this.state.ld2_desc}
                onChange={this.onChange}
              />
              <hr />
              {/* {this.state.ld2_designs[0].sub_header} */}

              {listDesigns}

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

export default LensDesigns1;
