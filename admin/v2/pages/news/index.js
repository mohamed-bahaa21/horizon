import React, { useState } from 'react';
import useFetch from 'hooks/useFetch';
import dynamic from 'next/dynamic';

import SERVER_URI from ".server.env";

let NewsEditor;
if (typeof window !== "undefined") {
    NewsEditor = dynamic(() => import('components/pages/NewsEditor'));
}

export default function Editor() {
    const [blocks, setBlocks] = useState(null);

    const { data } = useFetch(
        `${SERVER_URI}/api/getNews`,
        {
            onDataLoad: data => {
                console.log("GET: ", data);
                setBlocks(data.blocks)
            },
        },
    );

    return (
        <div>
            {NewsEditor && (blocks != null) &&
                <NewsEditor blocks={blocks} />
            }
        </div>
    )
}