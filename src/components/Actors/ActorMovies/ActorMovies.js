import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../../ApiKey";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ActorMovies = ({ actor_id }) => {

    const [actorMovie, setActorMovie] = useState([])

    const getActorMovies = async (id, key) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
        const { data } = await url
        setActorMovie(data.cast)
    }

    console.log(actorMovie);

    useEffect(() => {
        getActorMovies(actor_id, APIKEY)
    })


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };

    return (
        <div id="actorMovie">
            <div className="container">
                <Slider {...settings}>
                    {
                        actorMovie.filter(el => el.poster_path).map(el => (
                            <div className="actorMovies">
                                <Link to={`/movies/detail-page/${el.id}`}>
                                    <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img" />
                                </Link>
                                <h3>{el.title}</h3>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default ActorMovies