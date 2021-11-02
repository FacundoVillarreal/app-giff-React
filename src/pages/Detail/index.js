import React from "react";

export default function Detail ({params}) {
    console.log(params)
    return <h1>Gif con ID {params.id}</h1>
}