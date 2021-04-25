import React, { Component, useEffect, useState } from 'react'
import {
  CLabel,
  CForm,
  CInput,
  CTextarea,
  CFormText,
  CFormGroup,
  CButton,
  CCol,
  CRow,
  CInputGroup,
  CInputGroupText,
  CAlert,
  CInputCheckbox,
} from '@coreui/react'

import axios from 'axios';
import FlashMessage from 'react-flash-message'
import { from } from 'apollo-link';

// import { graphql } from "react-apollo";
// import { useQuery, gql } from "@apollo/client";
// import { LOAD_HORIZON } from "../../../queries/queries";

var SERVER_URI = "http://localhost:5000"
var ADMIN_URI = "http://localhost:3000"

if (process.env.NODE_ENV === 'development') {
  SERVER_URI = "http://localhost:5000"
  ADMIN_URI = "http://localhost:3000"
}

if (process.env.NODE_ENV === 'production') {
  SERVER_URI = "https://horizon-server.herokuapp.com"
  ADMIN_URI = "https://horizon-admin.herokuapp.com"
}

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,
      name: '...',
      hero_parag_1: '...',
      hero_header_1: '...',
      hero_parag_2: '...',
      hero_link_1_name: '...',
      hero_link_1_href: '...',
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChange_hero_parag_1 = this.onChange_hero_parag_1.bind(this);
    this.onChange_hero_header_1 = this.onChange_hero_header_1.bind(this);
    this.onChange_hero_parag_2 = this.onChange_hero_parag_2.bind(this);
    this.onChange_hero_link_1_name = this.onChange_hero_link_1_name.bind(this);
    this.onChange_hero_link_1_href = this.onChange_hero_link_1_href.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios.get(`${SERVER_URI}/api/getLandingData`)
      .then(response => {
        console.log(response.data[0]);
        const {
          name,
          hero_parag_1,
          hero_header_1,
          hero_parag_2,
          hero_link_1_name,
          hero_link_1_href
        } = response.data[0]
        this.setState({
          name: name,
          hero_parag_1: hero_parag_1,
          hero_header_1: hero_header_1,
          hero_parag_2: hero_parag_2,
          hero_link_1_name: hero_link_1_name,
          hero_link_1_href: hero_link_1_href
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }

  onChange_hero_parag_1(e) {
    this.setState({
      hero_parag_1: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }
  onChange_hero_header_1(e) {
    this.setState({
      hero_header_1: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }
  onChange_hero_parag_2(e) {
    this.setState({
      hero_parag_2: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }
  onChange_hero_link_1_name(e) {
    this.setState({
      hero_link_1_name: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }
  onChange_hero_link_1_href(e) {
    this.setState({
      hero_link_1_href: e.target.value,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const hero_section = {
      name: this.state.name,
      hero_parag_1: this.state.hero_parag_1,
      hero_header_1: this.state.hero_header_1,
      hero_parag_2: this.state.hero_parag_2,
      hero_link_1_name: this.state.hero_link_1_name,
      hero_link_1_href: this.state.hero_link_1_href
    }

    axios.post(`${SERVER_URI}/api/postHeroData`, hero_section)
      .then(res => console.log(res));

    // window.location = `${ADMIN_URI}/#/landing/hero/`;
    this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
  }


  // displayparag = () => {
  //   var { hero } = this.props.data
  //   if (data.loading) {
  //     return (<div>Loading parag...</div>)
  //   } else {
  //     return (
  //       console.log(hero.parag)
  //     )
  //   }
  // }

  render() {
    return (
      <CRow>
        {
          (this.state.edited == true) ?
            <div>
              <FlashMessage duration={3000}>
                <CAlert
                  width="1"
                  color="success"
                  dismissible='true'
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
              <h6>{this.state.name}</h6>
              {/* <CLabel htmlFor="name">name</CLabel> */}
              <CInput
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
              <CFormText className="help-block">Please enter name</CFormText>
            </CFormGroup>

            <CFormGroup>
              {/* #2 */}
              {/* <CLabel htmlFor="hero_parag_1">hero_parag_1</CLabel> */}
              <CInput
                type="text"
                id="hero_parag_1"
                name="hero_parag_1"
                placeholder="hero_parag_1"
                value={this.state.hero_parag_1}
                onChange={this.onChange_hero_parag_1}
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
                onChange={this.onChange_hero_header_1}
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
                onChange={this.onChange_hero_parag_2}
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
                onChange={this.onChange_hero_link_1_name}
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
                  onChange={this.onChange_hero_link_1_href}
                />
              </CInputGroup>
            </CFormGroup>

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
    )
  }
}

export default Hero
