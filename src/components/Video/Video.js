import axios from "axios";
import React, { useEffect, useState } from "react";
import { APIKEY } from "../ApiKey";
import Slider from "react-slick";




const Video = ({ movie_id }) => {

    const [video, setVideo] = useState([])

    const getVideo = async (id, key) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
        const { data } = await url;
        setVideo(data.results)
    }


    console.log(video);

    useEffect(() => {
        getVideo(movie_id, APIKEY)
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div id='video'>
            <div className="container">
                <h1>Trailer</h1>
                <div className="video">
                    <Slider {...settings}>
                        {
                            video.map((el) => (
                                <div className="trailer">
                                    <iframe width="350"
                                        height="200"
                                        src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            ))
                        }

                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default Video