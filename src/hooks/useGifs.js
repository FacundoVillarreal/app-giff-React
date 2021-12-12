import react, { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0
//recuperamos la keyword del localStorage

export function useGifs({ keyword, rating } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext);

    //recuperamos la keywoed del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'


    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse, rating })
            .then(img => {
                setGifs(img)

                setLoading(false)

                //guardamos la keyword del localStorage
                localStorage.setItem("lastKeyword", keyword)
            });
    }, [rating, keyword, setGifs, keywordToUse])

    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, rating , page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [page, keywordToUse, setGifs, rating])

    return { loading, loadingNextPage, gifs, setPage }
}