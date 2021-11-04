import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse }).then(img => {
            setGifs(img)
            setLoading(false)
            
            //guardamos la keyword del localStorage
            localStorage.setItem("lastKeyword", keyword)
        });
    }, [keyword])

    return { loading, gifs }
}