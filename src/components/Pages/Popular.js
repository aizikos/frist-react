import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../ApiKey/index.js";
import MoviesCard from "../KinoPage/MoviesCard.js";


const Popular = () => {

    const [popular,setPopular] = useState([])

    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const { data } = await res
        setPopular(data.results)
    }

    console.log(popular)
    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        popular.map(el => <MoviesCard el = {el}/>)
                    }
                </div>
            </div>
        </div>
    )
}


export default Popular