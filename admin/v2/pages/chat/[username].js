import React, { useEffect, useState, useRef } from 'react';
import socketIOClient from "socket.io-client";
import { useRouter } from "next/router"
import useFetch from 'hooks/useFetch';
import usePost from 'hooks/usePost';
import Layout from 'components/layout/Layout';
import Toast from 'components/common/Toast';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Button from 'components/common/Button';
import { Formik, Form, Field } from 'formik';
import FormLayout, {
    FormButtons,
    FormError,
    FormMessage,
    FormRow,
} from 'components/layout/FormLayout';
import EmptyPlaceholder from 'components/common/EmptyPlaceholder';

import loginStyles from 'styles/CForm.module.css';
import styles from 'styles/Home.module.css';

import CHAT_URI from '.chat.env';

export default function DynamicPage() {
    const router = useRouter()
    const {
        query: { username },
    } = router
    const post = usePost();
    const [userChat, setUserChat] = useState([{ sender: "...", message: "...", createdAt: '...' }]);
    const [message, setMessage] = useState();
    const [saved, setSaved] = useState(0);


    // let socketRef = useRef();
    // useEffect(() => {
    //     socketRef.current = socketIOClient("http://localhost:5000");
    // }, []);


    const { data } = useFetch(
        `${CHAT_URI}/api/users/${username}`, {
        onDataLoad: data => {
            setUserChat(data.chat);
            handleSave()
        },
    },
        [saved],
    );

    function handleClose() {
        setMessage('')
    }

    function handleSave() {
        setSaved(state => state + 1);
        setMessage(<FormattedMessage id="message.save-success" defaultMessage="Message Sent." />);
        handleClose();
    }

    const handleSubmit = async (values, { resetForm }) => {
        console.log('Submit: ', values);
        // let { username, sender, message } = values;
        // const ok = true;
        const { ok, data } = await post(`${CHAT_URI}/api/users/${username}`, values);

        resetForm();
        if (ok) {
            handleSave();
        } else {
            setMessage(
                data || <FormattedMessage id="message.failure" defaultMessage="Something went wrong." />,
            );
        }
    };

    if (!data) {
        return null;
    }

    const empty = (
        <EmptyPlaceholder
            msg={
                <FormattedMessage
                    id="message.no-chats-configured"
                    defaultMessage="You don't have any chats configured."
                />
            }
        ></EmptyPlaceholder>
    );

    return (
        <Layout headerType={`content`}>
            <div className={styles.flex}>
                <a href="/" className={styles.card}>
                    <h2>&larr; Home</h2>
                </a>

                <a href="/chat" className={styles.card}>
                    <h2>&larr; Chat</h2>
                </a>
            </div>

            user: {username}
            <br />
            chat: {userChat.map((msg, index) => (
                <div key={index} className={(msg.sender == "Horizon") ? styles.adminMsg : styles.userMsg}>
                    <p>{msg.message}</p>
                    <h6>date: {msg.createdAt}</h6>
                </div>
            ))}
            <FormLayout className={loginStyles.login}>
                <Formik
                    initialValues={{
                        username: username,
                        sender: 'Horizon',
                        message: ''
                    }}
                    onSubmit={handleSubmit}
                    setFieldValue
                >
                    {() => (
                        <Form>
                            <Field
                                name={`username`}
                                type={`text`}
                                disabled
                                hidden
                            />
                            <Field
                                name={`sender`}
                                type={`text`}
                                disabled
                                hidden
                            />
                            <FormRow>

                                <Field
                                    name={`message`}
                                    type={`text`}
                                    as={`textarea`}
                                    placeholder="message"
                                    setFieldValue={""}
                                />
                                <FormError name={`message`} />
                            </FormRow>
                            <FormButtons>
                                <Button type="submit" variant="action">
                                    <FormattedMessage id="label.submit" defaultMessage="Submit" />
                                </Button>
                            </FormButtons>
                            <FormMessage>{message}</FormMessage>
                        </Form>
                    )}
                </Formik>
            </FormLayout>
        </Layout>
    )
}