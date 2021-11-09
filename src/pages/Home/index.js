import { useState } from "react";
import "./style.css"
import { Link, useLocation } from "wouter";
import ListOfGif from "components/ListOfGifs/ListOfGifs.components";
import { useGifs } from "hooks/useGifs";
import LazyTrending from "components/TrendingSearches"

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
        <>
            <form onSubmit={handleSubmit} className="Form-search">
                <input type="text"
                    value={keyword}
                    onChange={handleChange}
                    placeholder="Search a gif here..."
                ></input>
            </form>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGif gifs={gifs} />
           <LazyTrending/>
        </>

    )
}