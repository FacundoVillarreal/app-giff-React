import React, { useCallback, useEffect, useRef } from 'react'
import ListOfGif from "components/ListOfGifs/ListOfGifs.components";
import Spinner from "components/Spinner/Spinner.components";
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';
import { Box } from "@mui/material"

export default function SearchResult({ params }) {

    const { keyword, rating = 'g' } = params;
    const { loading, gifs, setPage } = useGifs({ keyword, rating });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });


    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])
    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <Box>
                        <Helmet>
                            <title>{gifs.title}</title>
                            <meta name="description" content={gifs.title} />
                        </Helmet>
                        <SearchForm initialKeyword={keyword} initialRating={rating} />
                        <ListOfGif gifs={gifs} />
                        <div id="visor" ref={externalRef}></div>
                    </Box>
            }
        </>
    )
}