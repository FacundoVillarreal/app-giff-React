import React , { useState, useCallback } from 'react'
import { Link, useLocation } from "wouter";
import { TextField, Select } from "@mui/material"

const RATINGS = ['g','pg', 'pg-13', 'r' ]


function SearchForm({initialKeyword = '', initialRating='g'}) {

    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
    const [rating, setRating] = useState(initialRating);
    const [time, setTime] = useState(0)
    const [_, pushLocation] = useLocation();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}/${rating}`)
    }

    // const handleSubmit = useCallback(({ keyword }) => {
    //     evt.preventDefault();
    //     pushLocation(`/search/${keyword}`)
    // }, [pushLocation])


    const handleChange = evt => {
        setKeyword(evt.target.value);
        setTime(time + 1)
    }

    const handleChangeRatigns = (evt) => {
        setRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="Form-search">
            <TextField type="text"
                value={keyword}
                onChange={handleChange}
                color="warning"
                label="Search a gif here..."
            ></TextField>
            <select onChange={handleChangeRatigns} value={rating}> 
            <option disabled>Ratings type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
        <small>{time}</small>
        </form>

    )

}

//React.memo es un componente de orden superior, el cual recibe un componente de y devuelve otro componente
//React lo memoriza y evita que se renderize si sus props anteriores y nuevas no han cambiado.

export default React.memo(SearchForm)