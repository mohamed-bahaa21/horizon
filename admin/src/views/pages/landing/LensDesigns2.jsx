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
      ld2_designs: [{
        _id: 'id',
        header: 'header',
        sub_header: 'header',
        img: 'header',
        content_before: 'header',
        content_after: 'header',
        specs: [{
          _id: 'id',
          title: '213',
          desc: '123',
        }]
      }]
    };

    this.onChangeHeader = this.onChangeHeader.bind(this);
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getLensDesigns2`)
      .then((response) => {
        console.log(response.data);
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

  // onChange(e) {
  //   const { id, value } = e.target;
  //   console.log(value);
  //   let { ld2_header, ld2_desc, ld2_designs } = this.state;

  //   const targetIndex = ld2_designs.findIndex(datum => {
  //     return datum._id == id;
  //   });

  //   if (targetIndex !== -1) {
  //     ld2_designs[targetIndex].header = value;
  //     this.setState({ ld2_designs });
  //   }
  // }

  onChangeHeader(e) {
    const value = e.target.value;
    console.log(value);

    this.setState({
      ld2_header: value,
    })
  }


  onChange(e) {
    const { id, value, name } = e.target;
    console.log('id:: ', id);
    console.log('value:: ', value);
    console.log('name:: ', name);

    this.setState(prevState => ({
      [e.target.name]: value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
    )
  }

  render() {
    let listDesigns = this.state.ld2_designs.map(design =>
      <div key={design._id}>
        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            Paste Image URL
              </CInputGroupText>
          <CInput
            type="text"
            id="design_img"
            name="design_img"
            placeholder="design_img"
            value={design.img}
            onChange={this.onChange}
          />
        </CInputGroup>
        <br />
        <CInput
          type="text"
          id={design._id}
          name='header'
          placeholder="design_header"
          value={this.state.ld2_header}
          onChange={this.onChangeHeader}
        />
        <br />
        <CInput
          type="text"
          id="design_sub_header"
          name="design_sub_header"
          placeholder="design_sub_header"
          value={design.sub_header}
          onChange={this.onChange}
        />
        <br />
        <CInput
          type="text"
          id="design_content_before"
          name="design_content_before"
          placeholder="design_content_before"
          value={design.content_before}
          onChange={this.onChange}
        />
        <br />
        <CInput
          type="text"
          id="design_content_after"
          name="design_content_after"
          placeholder="design_content_after"
          value={design.content_after}
          onChange={this.onChange}
        />
        <br />
        {design.specs.map(spec =>
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
        )}
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
              <h6>{this.state.ld2_header}</h6>
              {/* {this.state.ld2_designs[0].sub_header} */}
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
