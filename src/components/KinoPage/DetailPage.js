import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../ApiKey";
import Actor from "../Actors/Actor";
import Video from "../Video/Video";




const DetailPage = () => {

    const [detail, setDetail] = useState({})
    const { movie_id } = useParams();


    const getDetailPage = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}&language=en-US`)
        const { data } = await url
        setDetail(data)
    }

    console.log(detail);

    useEffect(() => {
        getDetailPage()
    }, [])

    return (
        <>
            <div style={
                { background: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}') no-repeat center/cover` }
            } id="detail">
                <div className="container">

                    {
                        <div className="detail">
                            <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${detail.poster_path}`} alt="img" />
                            <div className="detail-desk">
                                <h2>{detail.title}</h2>
                                <p>{detail.overview}</p>
                                <h2>{Math.floor(detail.runtime / 60)} h {detail.runtime % 60} min</h2>
                                <div className="detail-vote">
                                    <h2 color="black">
                                        {Math.round(detail.vote_average * 10)} <sup>%</sup>
                                    </h2>
                                </div>
                            </div>
                        </div>

                    }

                </div>
            </div>
            <Actor  movie_id = { movie_id}/>
            <Video movie_id = {movie_id}/>
        </>
    )
}



export default DetailPage

