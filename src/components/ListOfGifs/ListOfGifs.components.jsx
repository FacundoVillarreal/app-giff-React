import React from "react";
import './styles.css'
import Gif from "../Gif/Gif.component";
import Box from '@mui/material/Box';
export default function ListOfGif({ gifs }) {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            alignItems: 'center',
            m:'0 25px'
        }}>
            {
                gifs.map(({ id, title, url, username }) =>
                    <Gif
                        id={id}
                        key={id}
                        title={title}
                        url={url}
                        usernafme={username}
                    />
                )
            }
        </Box>
    )
}