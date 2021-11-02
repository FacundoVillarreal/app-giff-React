import React from "react";
import { Link } from "wouter";
import './Gif.css'

export default function Gif({ id, url, title }) {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
                <img src={url} alt={title}></img>
            </Link>
        </div>
    )
}