import { useState, useEffect } from "react";
import getTrendingTermsServices from "services/getTrendingTermsService"
import Category from "components/Category/Category";

export default function TrendingSearches() {

    const [trends, setTrends] = useState([])
    useEffect(() => {
        getTrendingTermsServices()
            .then(setTrends)
    }, [])
    return <Category options={trends} name="Tendencias" />

}