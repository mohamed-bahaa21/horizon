import React, { Component } from "react";

import {
    CForm,
    CInput,
    CFormGroup,
    CCol,
    CRow,
    CAlert,
    CToaster,
    CToast,
} from "@coreui/react";

import axios from "axios";
import FlashMessage from 'react-flash-message'

var SERVER_URI = "http://localhost:5000";

if (process.env.NODE_ENV === "development") {
    SERVER_URI = "http://localhost:5000";
}

if (process.env.NODE_ENV === "production") {
    SERVER_URI = "https://horizon-server.herokuapp.com";
}

class ScreenShots extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: 0,
            edited: false,
            submitClass: 'disabled',
            submitDisable: true,

            ss_section_display: true,
        };
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios
            .get(`${SERVER_URI}/api/getScreenShots`)
            .then((response) => {
                const {
                    ss_section_display
                } = response.data;
                this.setState({
                    ss_section_display: ss_section_display
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
                ss_section_display: this.state.ss_section_display,
            };
            console.log("POST_STATE:: ", prog_section);
            axios.post(`${SERVER_URI}/api/postScreenShots`, prog_section)
                .then(res => console.log(res));
            // window.location = `${ADMIN_URI}/#/landing/ScreenShots/`;
            this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
        }
    }

    toggleCheckbox(e) {
        e.preventDefault();
        this.setState({
            ss_section_display: !this.state.ss_section_display,
            submitClass: 'primary',
            submitDisable: false,
            edited: false,
        });
    }

    render() {
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
                            <h4>{this.state.ss_section_display ? "Show" : "hide"}</h4>
                            <a href="#" role="button" onClick={this.toggleCheckbox}>
                                <input
                                    type="checkbox"
                                    title="ss_section_display"
                                    name="ss_section_display"
                                    checked={this.state.ss_section_display}
                                    readOnly
                                />_Show Section</a>
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
            </CRow>
        );
    }
}

export default ScreenShots;
