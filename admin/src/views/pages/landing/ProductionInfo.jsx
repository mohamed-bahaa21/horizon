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

class ProductionInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,

      pi_section_display: true,
      pi_header: "...",
      pi_desc: "...",
      pi_items: [{
        item_img: "...",
        item_num: 0,
        item_title: "...",
      }]
    };

    this.onChangeItem = this.onChangeItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getProductionInfo`)
      .then((response) => {
        const {
          pi_section_display,
          pi_header,
          pi_desc,
          pi_items,
        } = response.data;
        this.setState({
          pi_section_display: pi_section_display,
          pi_header: pi_header,
          pi_desc: pi_desc,
          pi_items: pi_items,
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
        pi_section_display: this.state.pi_section_display,
        pi_header: this.state.pi_header,
        pi_desc: this.state.pi_desc,
        pi_items: this.state.pi_items,
      };

      console.log("POST_STATE:: ", prog_section);

      axios.post(`${SERVER_URI}/api/postProductionInfo`, prog_section)
        .then(res => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/ProductionInfo/`;
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

  onChangeItem(e, i) {
    const { value, name } = e.target;
    // console.log('NAME:: ', name);
    // console.log('VALUE:: ', value);
    // console.log('_____________________________________');

    this.setState(prevState => {
      const pi_items = [...prevState.pi_items]

      pi_items[i] = {
        ...pi_items[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        pi_items,
      }
    })

    // console.log(this.state.pi_items[i]);
    // console.log(this.state);
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      pi_section_display: !this.state.pi_section_display,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  render() {
    let listImgs = this.state.pi_items.map((item, item_i) =>
      <div key={item_i}>
        <Accordion
          title="Design item"
          content={
            <div>
              {/* INPUT #1 item Title */}
              <CInput
                type="text"
                id="item_title"
                name="item_title"
                placeholder="item_title"
                value={item.item_title}
                onChange={event => this.onChangeItem(event, item_i)}
              />
              <br />
              {/* INPUT #2 item Number */}
              <CInput
                type="text"
                id="item_num"
                name="item_num"
                placeholder="item_num"
                value={item.item_num}
                onChange={event => this.onChangeItem(event, item_i)}
              />
              {/* INPUT #1 item IMG Link*/}
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">
                  Paste Image URL
              </CInputGroupText>
                <CInput
                  type="text"
                  placeholder="item_img"
                  name="item_img"
                  value={item.item_img}
                  onChange={event => this.onChangeItem(event, item_i)}
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
              <h4>{this.state.pi_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="pi_section_display"
                  name="pi_section_display"
                  checked={this.state.pi_section_display}
                  readOnly
                />_Show Section</a>
            </CFormGroup>

            <CFormGroup>
              {/* #1 Section Header */}
              <h6>{this.state.pi_header}</h6>
              <CInput
                type="text"
                id='pi_header'
                name='pi_header'
                placeholder="pi_header"
                value={this.state.pi_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="pi_desc"
                name="pi_desc"
                placeholder="pi_desc"
                value={this.state.pi_desc}
                onChange={this.onChange}
              />
              <hr />
              {/* {this.state.pi_items[0].sub_header} */}

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

export default ProductionInfo;
