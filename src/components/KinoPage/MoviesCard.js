import React from "react";
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";

const MoviesCard = ({ el }) => {

    return (
        <div className="movies_card">
            <Link to={`/movies/detail-page/${el.id}`}>
                <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt="" />
            </Link>

            <div className="rating">
                <p>{Math.round(el.vote_average)}</p>
            </div>
            <div className="movies-info">
                <h4>{el.title}</h4>
                <h6>Release date: {el.release_date}</h6>
            </div>

            





        </div>


    )
}

export default MoviesCard