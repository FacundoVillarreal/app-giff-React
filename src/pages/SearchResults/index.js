import react from "react";
import ListOfGif from "../../components/ListOfGifs/ListOfGifs.components";

export default function SearchResult({params}) {
    const {keyword} = params;

    return (
        <>
            <ListOfGif keyword={keyword}/>
        </>
    )
}