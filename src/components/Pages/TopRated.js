import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../ApiKey";
import MoviesCard from "../KinoPage/MoviesCard";


const TopRated = () => {

    const [TopRated,setTopRated] = useState([])

    const getTopRated = async()=>{
        const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {results} = await res.data
        setTopRated(results)
    }

    console.log(TopRated);

    useEffect(() => {
        getTopRated()
    },[])

    return (
        <div id='movies'>
        <div className="container">
            <div className="movies">
                {
                    TopRated.map(el => <MoviesCard el={el}/>)
                }
            </div>
        </div>
    </div>
    )
}

export default TopRated