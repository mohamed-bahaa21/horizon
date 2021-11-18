import React, { useState } from 'react';
import useFetch from 'hooks/useFetch';
import dynamic from 'next/dynamic';

import SERVER_URI from ".server.env";

export default function Accessories() {
    const [blocks, setBlocks] = useState(null);

    let NewsEditor;
    if (typeof window !== "undefined") {
        NewsEditor = dynamic(() => import('components/pages/NewsEditor'));
    }

    const { data } = useFetch(`${SERVER_URI}/api/getAccessoriesData`, {
        onDataLoad: data => {
            console.log("GET: ", data);
            setBlocks(data.blocks)
        },
    });

    return (
        <div>
            {NewsEditor && (blocks != null) &&
                <NewsEditor blocks={blocks} postUrl={`${SERVER_URI}/api/postAccessoriesData`} />
            }
        </div>
    )
}