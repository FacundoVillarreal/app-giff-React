import React, { useCallback, useEffect, useRef } from 'react'
import ListOfGif from "components/ListOfGifs/ListOfGifs.components";
import Spinner from "components/Spinner/Spinner.components";
import { useGifs } from 'hooks/useGifs';
import { Stack, Button, Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResult({ params }) {

    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once : false });

   
    const debounceHandleNextPage = useCallback( debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])

    useEffect(function () {
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])
    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <div> <ListOfGif gifs={gifs} />
                        <div id="visor" ref={externalRef}></div>
                    </div>
            }
        </>
    )
}