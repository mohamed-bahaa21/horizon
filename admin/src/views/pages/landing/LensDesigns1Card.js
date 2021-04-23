import React, { Component } from "react";

import {
    CInput,
    CFormGroup,
} from "@coreui/react";

class LensDesigns1Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: "...",
            link: "...",
            type: "...",
            header: "..."
        };

        this.onChangeImg = this.onChangeImg.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeHeader = this.onChangeHeader.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const {
            img,
            link,
            type,
            header
        } = this.props;
        this.setState({
            img: img,
            link: link,
            type: type,
            header: header
        });
    }

    onChangeImg(e) {
        this.setState({
            img: e.target.value,
        });
    }
    onChangeLink(e) {
        this.setState({
            link: e.target.value,
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value,
        });
    }
    onChangeHeader(e) {
        this.setState({
            header: e.target.value,
        });
    }

    // Using imgbb for image hosting 
    // onSubmitImgFile(e) {
    //   e.preventDefault();

    //   axios
    //     .post(`https://api.imgbb.com/1/upload?expiration=600&key=5654e1ea6c180344bb90d5fad457ef02`)
    //     .then((res) => console.log(res));

    //   window.location = `${ADMIN_URI}/#/landing/LensDesigns1s/`;
    // }

    render() {
        return (
            <CFormGroup>
                {/* #1 name */}
                <h6>{this.state.name}</h6>
                <CInput
                    type="text"
                    id="img"
                    name="img"
                    placeholder="img"
                    value={this.state.img}
                    onChange={this.onChangeImg}
                />
                <br />
                <CInput
                    type="text"
                    id="link"
                    name="link"
                    placeholder="link"
                    value={this.state.link}
                    onChange={this.onChangeLink}
                />
                <br />
                <CInput
                    type="text"
                    id="type"
                    name="type"
                    placeholder="type"
                    value={this.state.type}
                    onChange={this.onChangeType}
                />
                <br />
                <CInput
                    type="text"
                    id="header"
                    name="header"
                    placeholder="header"
                    value={this.state.header}
                    onChange={this.onChangeHeader}
                />
            </CFormGroup>
        );
    }
}

export default LensDesigns1Card;
