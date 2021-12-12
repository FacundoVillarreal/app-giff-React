import { useEffect, useRef } from "react"

export default function useSEO({ description, title }) {

    //en la referencia guardamos el title que tenemos en ese momento
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))


    useEffect(function () {
        const previusTitle = prevTitle.current
        if (title) {
            document.title = `${title}  | GIPHY`
        }

        //este efecto cuando se demonte de este componente va a ejecutar una funcion
        //que va actualizar otra vez el titulo y le va a poner el previo

        return () => document.title = previusTitle

    }, [title])

    useEffect(function () {
        const previusDescription = prevDescription.current

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]')
            metaDescription.setAttribute('content', description)

            return () => metaDescription.setAttribute('content', previusDescription)
        }

    }, [description])
}