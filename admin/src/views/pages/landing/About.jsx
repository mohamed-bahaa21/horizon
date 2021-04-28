import React, { Component } from "react";

import {
    CLabel,
    CForm,
    CInput,
    CFormGroup,
    CCol,
    CRow,
    CAlert,
    CCard,
    CToaster,
    CToast
} from "@coreui/react";

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


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

class About extends Component {
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

            title: '...',
            content: '...',
        };

        this.onChange = this.onChange.bind(this);
        this.onChangeEditor = this.onChangeEditor.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        axios
            .get(`${SERVER_URI}/api/getAboutData`)
            .then((response) => {
                // console.log(response.data);
                const {
                    content
                } = response.data;
                this.setState({
                    content: content,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChange(e) {
        const value = e.target.value;
        console.log(value);
        this.setState({
            [e.target.name]: value,
            submitClass: 'primary',
            submitDisable: false,
            edited: false,
        })
    }

    onChangeEditor(e, editor) {
        const data = editor.getData();
        this.setState({
            content: data,
            submitClass: 'primary',
            submitDisable: false,
            edited: false,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const prog_section = {
            content: this.state.content,
        };

        axios.post(`${SERVER_URI}/api/postAboutData`, prog_section)
            .then(res => console.log(res));

        // window.location = `${ADMIN_URI}/#/landing/About/`;
        this.setState({ edited: true, submitClass: 'disabled', submitDisable: true, })
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

                    <CKEditor
                        name="body"
                        placeholder="About Page"
                        content={this.state.content}
                        editor={ClassicEditor}
                        data={this.state.content}
                        contentsCss='/css/mysitestyles.css'
                        onChange={this.onChangeEditor}
                    />

                    <hr />


                    <CForm onSubmit={this.onSubmit}>
                        <CFormGroup>
                            {/* #1 name */}
                            <CInput
                                type="text"
                                id="content"
                                name="content"
                                placeholder="content"
                                value={this.state.content}
                                onChange={this.onChange}
                            />
                        </CFormGroup>

                        <CLabel>Content: </CLabel>
                        <CCard dangerouslySetInnerHTML={{ __html: this.state.content }} />

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

export default About;
