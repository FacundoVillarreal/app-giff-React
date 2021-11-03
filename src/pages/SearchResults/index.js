import react from "react";
import {useState, useEffect} from 'react'
import getGifs from "../../services/getGifs";
import ListOfGif from "../../components/ListOfGifs/ListOfGifs.components";
import Spinner from "../../components/Spinner/Spinner.components";

export default function SearchResult({params}) {
    const {keyword} = params;

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword }).then(img => {
            setGifs(img)
            setLoading(false)
        });
    }, [keyword])

    return (
        <>
        {
            loading
            ?<Spinner/>
            :<ListOfGif gifs={gifs}/>
        }
        </>
    )
}