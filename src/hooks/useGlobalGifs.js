import { useContext } from "react";

import GifsContext from "../context/GifsContext";

export default function useGlobalGifs() {
    const gif = useContext(GifsContext)
    return gif
}