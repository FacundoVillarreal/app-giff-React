import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import './Gif.css'
import { Link } from "wouter";

import './Gif.css'

export default function Gif({ id, url, title }) {
    return (
                <Link to={`/gif/${id}`} className="Gif-link">
                    <img src={url} alt={title}></img>
                </Link>
    )
}