import React from "react";
import './styles.css'
import Gif from "../Gif/Gif.component";
import { useState, useEffect } from "react";
import getGifs from "../../services/getGifs";
import Spinner from "../Spinner/Spinner.components";

export default function ListOfGif( params ) {
    const  {keyword}  = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword }).then(img => {
            setGifs(img)
            setLoading(false)
        });
    }, [keyword])
    if (loading) return <Spinner/>


    return (
        <div className="ListGif-Content">
            {
                gifs.map(({ id, title, url, username }) =>
                    <Gif
                        id={id}
                        key={id}
                        title={title}
                        url={url}
                        username={username}
                    />
                )
            }
        </div>
    )
}