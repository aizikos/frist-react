import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../ApiKey";
import Slider from "react-slick";
import person from '../../img/person.png'
import { Link } from "react-router-dom";


const Actor = ({ movie_id }) => {

    const [actors, setActors] = useState([])

    const getActors = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${APIKEY}&language=en-US`)
        const { data } = await url
        setActors(data.cast)
    }

    console.log(actors);

    useEffect(() => {
        getActors()

    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };


    return (
        <div id="actor">
            <div className="container">
                <h2>Actors</h2>
                <div className="actor">
                    <Slider {...settings}>
                        {
                            actors.map(el => (
                                <Link to={`/actor/detail-page/${el.id}`}>
                                    <div>
                                        {
                                            el.profile_path ? <img src={`https://media.themoviedb.org/t/p/w276_and_h350_face/${el.profile_path}`} alt="img" />
                                                : <img src={person} alt="img" />
                                        }
                                        <h4>{el.name}</h4>
                                        <p>{el.character}</p>

                                    </div>
                                </Link>
                                
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Actor

//