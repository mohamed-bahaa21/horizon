import React, { Component, useEffect, useState } from 'react'
import {
  CLabel,
  CForm,
  CInput,
  CFormText,
  CFormGroup,
  CCol,
  CRow
} from '@coreui/react'
import axios from 'axios';

import { DocsLink } from 'src/reusable'
import routes from '../../routes'

import { graphql } from "react-apollo";
// import BookList from "./BookList/BookList";

import { useQuery, gql } from "@apollo/client";
import { LOAD_HORIZON } from "../../queries/queries";



class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "..."
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/getLandingData')
      .then(response => {
        this.setState({ name: response.data.name })
      })
      .catch((error) => {
        console.log(error);
      })
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
        <CCol xs="12">
          <CForm action="landing/hero" method="post">
            <CFormGroup>
              <CLabel htmlFor="hero-parag-1">hero-parag-1</CLabel>
              <CInput
                type="text"
                id="hero-parag-1"
                name="hero-parag-1"
                placeholder="hero-parag-1"
              />
              <CFormText className="help-block">Please enter hero-parag-1</CFormText>
            </CFormGroup>
          </CForm>
          {
            this.state.name
          }
          {/* {this.displayarag()} */}
          {/* <BookList /> */}
        </CCol>
      </CRow>
    )
  }
}

export default Hero
