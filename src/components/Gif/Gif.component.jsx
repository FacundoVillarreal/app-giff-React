import React from "react";
import './Gif.css'
import { Link } from "wouter";

import './Gif.css'

function Gif({ id, url, title }) {
    return (
                <Link to={`/gif/${id}`} className="Gif-link">
                    <img src={url} alt={title}></img>
                </Link>
    )
}

export default React.memo(Gif,(prevProps, nextProps)=>{
    return prevProps.id === nextProps.id
})