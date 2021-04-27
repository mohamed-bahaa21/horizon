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

class News extends Component {
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

      blogs: [{
        date: '...',
        title: '...',
        summary: '...',
        content: '...',
        link: '...',
        bg: '...',
      }]
    };

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getBlogsData`)
      .then((response) => {
        console.log("REQ_DATA:: ", response.data);

        const blogs = response.data;

        this.setState({
          blogs: blogs,
        });

        console.log("REQ_STATE:: ", this.state.blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange(e, i) {
    const { id, value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState(prevState => {
      const blogs = [...prevState.blogs]

      blogs[i] = {
        ...blogs[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        blogs,
      }
    })
  }


  onSubmit(e) {
    e.preventDefault();
    
    const prog_section = {
      blogs: this.state.blogs
    };

    console.log("POST_DATA::", prog_section);

    axios.post(`${SERVER_URI}/api/postBlogsData`, prog_section)
      .then(res => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/News/`;
    this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
  }

  render() {
    let listBlogs = this.state.blogs.map((blog, blog_i) =>
      <div key={blog_i}>
        <Accordion
          title="Accordion Title"
          content={
            <div>
              <CFormGroup>
                <CInput
                  type="text"
                  id="date"
                  name="date"
                  placeholder="date"
                  value={blog.date}
                  onChange={event => this.onChange(event, blog_i)}
                />
                <br />
                <CInput
                  type="text"
                  id="title"
                  name="title"
                  placeholder="title"
                  value={blog.title}
                  onChange={event => this.onChange(event, blog_i)}
                />
                <br />
                <CInputGroup className="mb-3">
                  <CInputGroupText id="basic-addon3">
                    Paste Image URL
              </CInputGroupText>
                  <CInput
                    type="text"
                    id="bg"
                    name="bg"
                    placeholder="bg"
                    value={blog.bg}
                    onChange={event => this.onChange(event, blog_i)}
                  />
                </CInputGroup>
                <br />
                <CInput
                  type="text"
                  id="summary"
                  name="summary"
                  placeholder="summary"
                  value={blog.summary}
                  onChange={event => this.onChange(event, blog_i)}
                />
                <br />
                <CInput
                  type="text"
                  id="content"
                  name="content"
                  placeholder="content"
                  value={blog.content}
                  onChange={event => this.onChange(event, blog_i)}
                />
                <br />
                <CInput
                  type="text"
                  id="link"
                  name="link"
                  placeholder="link"
                  value={blog.link}
                  onChange={event => this.onChange(event, blog_i)}
                />
                <br />
              </CFormGroup>

            </div>
          }
        />
      </div>
    )

    return (
      <CRow>
        {
          (this.state.edited == true) ?
            <div>
              <FlashMessage duration={3000}>
                <CAlert
                  width="1"
                  color="success"
                  dismissible={true}
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

            {listBlogs}

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
      </CRow >
    );
  }
}

export default News;
