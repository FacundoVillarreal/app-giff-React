import react, { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0
//recuperamos la keyword del localStorage

export function useGifs({ keyword } = { keyword: null }) {
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)

    const { gifs, setGifs } = useContext(GifsContext);

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse }).then(img => {
            setGifs(img)

            setLoading(false)

            //guardamos la keyword del localStorage
            localStorage.setItem("lastKeyword", keyword)
        });
    }, [keyword, setGifs, keywordToUse])

    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [page, keywordToUse])

    return { loading, loadingNextPage, gifs, setPage }
}