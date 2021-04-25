import React, { Component } from "react";

import {
    CCol,
    CRow,
    CAlert,
    CImg,
    CTooltip
} from "@coreui/react";

import UploadImg from "../UploadImg/UploadImg";

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

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: "...",
            copied: false,
            imgs: []
        };
    }

    getGallery = () => {
        axios.get(`${SERVER_URI}/api/gallery`)
            .then(response => {

                const gallery = response.data
                let lista = []
                console.log(gallery[0]);
                
                gallery.map(img => {
                    lista.push((img))
                })
                this.setState({
                    imgs: lista
                })
                console.log(this.state.imgs);
            })

            .catch((error) => {
                console.log(error);
            })
    }

    copyToCLip = (e) => {
        const url = e.target.id;

        this.setState({
            copied: false,
        })

        navigator.clipboard.writeText(url)
        console.log('URL: ', url);

        this.setState({
            copied: true,
        })
    }

    componentDidMount() {
        this.getGallery()
    }

    render() {
        const listImgs = this.state.imgs.map((img) =>
            <div>
                <CTooltip content="Click to Copy URL" placement="top">
                    <CImg key={img._id} id={img.img_url} src={img.img_url} className="img-thumbnail" thumbnail width='30%' onClick={this.copyToCLip} />
                </CTooltip>
                <hr />
            </div>
        );
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
                    {listImgs}
                </CCol>

                <UploadImg />
            </CRow>
        );
    }
}

export default Gallery;
