import React from "react";
import './styles.css'
import Gif from "../Gif/Gif.component";

export default function ListOfGif( {gifs} ) {
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