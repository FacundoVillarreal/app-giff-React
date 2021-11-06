import React, { useState, useEffect } from 'react'
import ListOfGif from "../../components/ListOfGifs/ListOfGifs.components";
import Spinner from "../../components/Spinner/Spinner.components";
import { useGifs } from '../../hooks/useGifs';

export default function SearchResult({ params }) {

    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword })

    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <ListOfGif gifs={gifs} />
            }
        </>
    )
}