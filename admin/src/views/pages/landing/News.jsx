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
  CToast,
  CToaster,
} from "@coreui/react";

import Accordion from "../../../reusable/Accordion/Accordion";

import UploadImg from "../../UploadImg/UploadImg";

import axios from "axios";
import FlashMessage from 'react-flash-message'

var SERVER_URI = "http://localhost:5000";

if (process.env.NODE_ENV === "development") {
  SERVER_URI = "http://localhost:5000";
}

if (process.env.NODE_ENV === "production") {
  SERVER_URI = "https://horizon-server.herokuapp.com";
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

      fixedToasts: 0,

      image: "...",
      url: "...",
      progress: "...",

      blogs: [{
        _id: '',
        date: '...',
        title: '...',
        summary: '...',
        content: '...',
        link: '...',
        bg: '...',
      }]
    };

    this.onChange = this.onChange.bind(this);
    this.addFixedToast = this.addFixedToast.bind(this);

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
    const { value, name } = e.target;
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

    if (!this.state.submitDisable) {

      console.log(e.target.id);

      const prog_section = {
        blogs: this.state.blogs
      };

      console.log("POST_DATA::", prog_section);

      axios.post(`${SERVER_URI}/api/postBlogsData`, prog_section)
        .then(res => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/News/`;
      this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
      this.addFixedToast();
    }
  }

  addFixedToast() {
    console.log(this.state.fixedToasts);
    this.setState({
      fixedToasts: this.state.fixedToasts + 1
    })
  }

  render() {
    let listBlogs = this.state.blogs.map((blog, blog_i) =>
      <div key={blog_i}>
        <Accordion
          title={blog.title}
          content={
            <div>
              <CFormGroup>
                <CInput
                  disabled
                  type="text"
                  id="_id"
                  name="_id"
                  placeholder="_id"
                  value={blog._id}
                  onChange={event => this.onChange(event, blog_i)}
                />
                <br />
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
