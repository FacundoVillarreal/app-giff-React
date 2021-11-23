import { useState } from "react";
import "./style.css"
import { Link, useLocation } from "wouter";
import ListOfGif from "components/ListOfGifs/ListOfGifs.components";
import { useGifs } from "hooks/useGifs";
import LazyTrending from "components/TrendingSearches"
import { TextField, Box, Typography } from "@mui/material"

export default function Home() {

    const [keyword, setKeyword] = useState("");
    const [path, pushLocation] = useLocation();

    const { loading, gifs } = useGifs();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value);
    }
    return (
        <Box>
            <form onSubmit={handleSubmit} className="Form-search">
                <TextField type="text"
                    value={keyword}
                    onChange={handleChange}
                    color="warning"
                    label="Search a gif here..."
                ></TextField>
            </form>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                Última búsqueda
            </Typography>
            <ListOfGif gifs={gifs} />
            <LazyTrending />
        </Box>

    )
}