import React, { Component } from 'react'
import {
  CLabel,
  CForm,
  CInput,
  CFormText,
  CFormGroup,
  CCol,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import routes from '../../routes'

import { graphql } from "react-apollo";
import BookList from "./BookList/BookList";

class Hero extends Component {
  constructor(props) {
    super(props)
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
          <h1>
            {/* {this.displayarag()} */}
          </h1>
          <BookList />
        </CCol>
      </CRow>
    )
  }
}

export default Hero
