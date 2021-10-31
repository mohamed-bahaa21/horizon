import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import Layout from 'components/layout/Layout';
import Table from 'components/common/Table';
import EmptyPlaceholder from 'components/common/EmptyPlaceholder';
import Button from 'components/common/Button';
import Plus from 'assets/plus.svg';
import { CSVLink } from "react-csv";
import axios from 'axios';

import styles from 'styles/Home.module.css';

import SERVER_URI from ".server.env";

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            header: {
                label: "username",
                key: 'username'
            }
        }
    }


    getUsers = () => {
        axios.get(`http://localhost:5000/api/users`)
            .then(response => {

                const users = response.data
                let lista = []

                users.map(user => {
                    lista.push(([user.username]))
                    return lista
                })

                this.setState({
                    users: lista
                })
                // console.log(this.state.mailingList);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        let tableItems = []
        this.state.users.map(user => {
            let row = { "username": user }
            tableItems.push(row)
            return tableItems
        })

        const empty = (
            <EmptyPlaceholder
                msg={
                    <FormattedMessage
                        id="message.no-usernames-submitted"
                        defaultMessage="No one submitted yet !"
                    />
                }
            >
            </EmptyPlaceholder>
        );

        return (
            <Layout headerType={`content`}>
                <div>
                    <div className={`${styles.card} ${styles.card100}`}>
                        <Table
                            columns={[{
                                key: 'username',
                                label: <FormattedMessage id="label.username" defaultMessage="User Name" />,
                                className: 'col-12 col-xl-12',
                            }]}
                            rows={tableItems}
                            empty={empty}
                        />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Chat;
