import React, { useState } from 'react';
import usePost from 'hooks/usePost';
import Layout from 'components/layout/Layout';
import { createReactEditorJS } from "react-editor-js";
import EditorJS from "@editorjs/editorjs";
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

// import { data } from "data/data";
import SERVER_URI from ".server.env";

import styles from 'styles/Home.module.css';

function NewsEditor(blocks) {
    const [disabled, setDisabled] = useState(true)
    const EditorJSComp = createReactEditorJS()
    const EDITOR_JS_TOOLS = {
        header: Header,
        linkTool: LinkTool,
        quote: Quote,
        marker: Marker,
        image: SimpleImage,
        raw: Raw,
        list: List,
        checklist: CheckList,
        table: Table,
        embed: Embed,
        warning: Warning,
        code: Code,
        inlineCode: InlineCode,
        delimiter: Delimiter,
    };

    const post = usePost();

    const editor = new EditorJS({
        holder: 'editor',
        onReady: () => {
            editor.save().then((outputData) => {
                console.log('Editor data: ', outputData.blocks)
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
        },
        tools: EDITOR_JS_TOOLS,
        data: blocks,
        readOnly: false,
        onChange: () => {
            setDisabled(false)
        }
    });

    const postBlocks = () => {
        editor.save().then(async (outputData) => {
            // console.log('POST: ', outputData.blocks)
            const { ok, data } = await post(`${SERVER_URI}/api/editorjs`, outputData.blocks);

            if (ok) {
                console.log("Submited correctly");
            } else {
                console.log("Something went wrong submiting");
            }
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }

    // const editorJS = React.useRef(null);
    // const editor = new EditorJS();

    // const handleInitialize = React.useCallback((instance) => {
    //     editorJS.current = instance
    //     console.log("data: ", editorJS.current);
    // }, [])

    // const handleSave = React.useCallback(() => {
    //     const savedData = editorJS.current.save();
    // }, [])

    // const changeEditor = () => {
    //     editor.save().then((outputData) => {
    //         console.log('Article data: ', outputData)
    //     }).catch((error) => {
    //         console.log('Saving failed: ', error)
    //     });
    // }

    // EditorJS.save().then((outputData) => {
    //     console.log('New data: ', outputData)
    // }).catch((error) => {
    //     console.log('Saving failed: ', error)
    // });

    return (
        <Layout headerType={`content`}>
            {/* <EditorJSComp
                tools={EDITOR_JS_TOOLS}
                defaultValue={data}
                readOnly={false}
            /> */}

            {disabled ? (<button type="button" disabled>Submit</button>) :
                (
                    <button type="button" onClick={postBlocks} className={`${styles.btn}`} disabled={disabled}>
                        Submit
                    </button>
                )}

            <div id="editor"></div>

        </Layout>
    );
}

export default NewsEditor;