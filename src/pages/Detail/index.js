import React, { useContext } from "react";
import Gif from "components/Gif/Gif.component";
// import  GifsContext  from "context/GifsContext"
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner/Spinner.components";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";
export default function Detail({ params }) {

    const { gif, isLoading, isError } = useSingleGif({ id: params.id })

    const title = gif ? gif.title : ''
    // useSEO({ description: `Detail of ${title}`, title })

    //queremos acceder a la info del objeto react.createContext
    //aqui le decimos a react que queremos consumir||usar el context
    //si utilizamos un provider nos viene la info del value 
    //si no viene la info del react.createContext
    // const {gifs} = useContext(GifsContext);
    // const gif = gifs.find(singleGif => singleGif.id === params.id)

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }
    if (isError) return <Redirect to="/404" />
    if (!gif) return null
    return <>
        <Helmet>
            <title>{title} ||  Giphy</title>
        </Helmet>
        <Gif {...gif} />
    </>
}