import React, { useContext } from "react";
import Gif from "components/Gif/Gif.component";
import  GifsContext  from "context/GifsContext"

export default function Detail({ params }) {
    //queremos acceder a la info del objeto react.createContext
    //aqui le decimos a react que queremos consumir||usar el context
    //si utilizamos un provider nos viene la info del value 
    //si no viene la info del react.createContext
    const {gifs} = useContext(GifsContext);
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    console.log(gif)
    return <Gif {...gif}/>
}