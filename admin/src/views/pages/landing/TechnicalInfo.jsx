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

class TechnicalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 0,
      edited: false,
      submitClass: 'disabled',
      submitDisable: true,

      ti_section_display: true,
      ti_header: "...",
      ti_desc: "...",
      ti_items: [{
        item_title: "...",
        item_content: "..."
      }]
    };

    this.onChangeItem = this.onChangeItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    axios
      .get(`${SERVER_URI}/api/getTechnicalInfo`)
      .then((response) => {
        const {
          ti_section_display,
          ti_header,
          ti_desc,
          ti_items,
        } = response.data;
        this.setState({
          ti_section_display: ti_section_display,
          ti_header: ti_header,
          ti_desc: ti_desc,
          ti_items: ti_items,
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
        ti_section_display: this.state.ti_section_display,
        ti_header: this.state.ti_header,
        ti_desc: this.state.ti_desc,
        ti_items: this.state.ti_items,
      };

      console.log("POST_STATE:: ", prog_section);

      axios.post(`${SERVER_URI}/api/postTechnicalInfo`, prog_section)
        .then(res => console.log(res));

      // window.location = `${ADMIN_URI}/#/landing/TechnicalInfo/`;
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
      const ti_items = [...prevState.ti_items]

      ti_items[i] = {
        ...ti_items[i],
        [name]: value
      }

      return {
        submitClass: 'primary',
        submitDisable: false,
        edited: false,
        ti_items,
      }
    })

    // console.log(this.state.ti_items[i]);
    // console.log(this.state);
  }

  toggleCheckbox(e) {
    e.preventDefault();
    this.setState({
      ti_section_display: !this.state.ti_section_display,
      submitClass: 'primary',
      submitDisable: false,
      edited: false,
    });
  }

  render() {
    let listItems = this.state.ti_items.map((item, item_i) =>
      <div key={item_i}>
        <Accordion
          title="Item Info"
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
                id="item_content"
                name="item_content"
                placeholder="item_content"
                value={item.item_content}
                onChange={event => this.onChangeItem(event, item_i)}
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
              {/* OLD CHECKBOX *RIP* */}
              {/* <h4>{this.state.ti_section_display ? "Show" : "hide"}</h4>
              <a href="#" role="button" onClick={this.toggleCheckbox}>
                <input
                  type="checkbox"
                  title="ti_section_display"
                  name="ti_section_display"
                  checked={this.state.ti_section_display}
                  readOnly
                />_Show Section</a> */}

              {/* NEW LOOK - it's all about that */}
              <a class="show_design_link" href="#" role="button" onClick={this.toggleCheckbox}>
                <label class="show_design">
                  <input class="label__checkbox" id="show_design" name="show_design" type="checkbox" checked={this.state.ti_section_display} readOnly />
                  <span class="label__text">
                    <span class="label__check">
                      <i class="fa fa-check icon"></i>
                    </span>
                  </span>
                  <label class="show_design_label" for="show_design">Show Section</label>
                </label>
              </a>
            </CFormGroup>

            <CFormGroup>
              {/* #1 Section Header */}
              <h6>{this.state.ti_header}</h6>
              <CInput
                type="text"
                id='ti_header'
                name='ti_header'
                placeholder="ti_header"
                value={this.state.ti_header}
                onChange={this.onChange}
              />
              <br />
              <CInput
                type="text"
                id="ti_desc"
                name="ti_desc"
                placeholder="ti_desc"
                value={this.state.ti_desc}
                onChange={this.onChange}
              />
              <hr />
              {/* {this.state.ti_items[0].sub_header} */}

              {listItems}

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

export default TechnicalInfo;
