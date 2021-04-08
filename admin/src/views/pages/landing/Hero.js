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

// import { graphql } from "react-apollo";
// import BookList from "./BookList/BookList";

import { useQuery, gql } from "@apollo/client";
import { LOAD_HORIZON } from "../../../queries/queries";



class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '...',
      hero_parag_1: '...'
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/getLandingData')
      .then(response => {
        this.setState({ 
          name: response.data.name,
          hero_parag_1: response.data.hero_parag_1 
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const horizon = {
      name: this.state.name,
      hero_parag_1: this.state.hero_parag_1
    }
    console.log(horizon);

    axios.post('http://localhost:5000/api/postHeroData', horizon)
      .then(res => console.log(res));

    window.location = 'http://localhost:3000/#/landing/hero/';
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
          <CForm onSubmit={this.onSubmit}>
            <CFormGroup>
              <CLabel htmlFor="name">name</CLabel>
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
