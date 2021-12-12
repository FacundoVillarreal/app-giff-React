import React, { useCallback } from "react";
import "./style.css"
import { Link, useLocation } from "wouter";
import ListOfGif from "components/ListOfGifs/ListOfGifs.components";
import { useGifs } from "hooks/useGifs";
import LazyTrending from "components/TrendingSearches"
import { Box, Typography } from "@mui/material"
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {

    // const [path, pushLocation] = useLocation();

    const { loading, gifs } = useGifs();

    // const handleSubmit = useCallback(({ keyword }) => {
    //     pushLocation(`/search/${keyword}`)
    // }, [pushLocation])


    return (
        <Box>
            <Helmet><title>Home</title></Helmet>
            <SearchForm />
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                Última búsqueda
            </Typography>
            <ListOfGif gifs={gifs} />
            <LazyTrending />
        </Box>

    )
}