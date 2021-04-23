import React, { Component } from 'react'
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CPagination
} from '@coreui/react'
// react-csv
import { CSVLink, CSVDownload } from "react-csv";
// axios
import axios from 'axios';


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

class MailingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mailingList: [],
            header: {
                label: "Email",
                key: 'email'
            }
        }
    }


    getMailList = () => {
        axios.get(`${SERVER_URI}/api/mailing-list`)
            .then(response => {

                const mailing_list = response.data
                let lista = []
                // console.log(mailing_list[0].mail_email);
                mailing_list.map(mail => {
                    lista.push(([mail.mail_email]))
                })
                this.setState({
                    mailingList: lista
                })
                // console.log(this.state.mailingList);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getMailList()
    }


    render() {
        let tableItems = []
        this.state.mailingList.map(item => {
            let row = { "email": item }
            tableItems.push(row)
        })
        // console.log("table: ", tableItems);

        return (
            <div>
                <CSVLink className="btn btn-primary" data={this.state.mailingList} filename='Mailing_List.csv'>
                    Download Mailing List
                </CSVLink>
                <br/>
                <br/>
                <CRow>
                    <CCol xl={6}>
                        <CCard>
                            <CCardHeader>
                                Mailing
                  <small className="text-muted"> List</small>
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={tableItems}
                                    fields={[
                                        { key: 'email', _classes: 'font-weight-bold' }
                                    ]}
                                    hover
                                    striped
                                    itemsPerPage={5}
                                    clickableRows
                                />
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        )

    }

}

export default MailingList
