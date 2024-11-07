import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKEY } from "../ApiKey";
import ActorMovies from "./ActorMovies/ActorMovies";

const ActorsDetail = () => {

    const [actorDetail, setActotDetail]= useState({})

    const getActorDetail = async (id,key) => {
        const url = await axios (`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        setActotDetail(url.data)
    }

    const {actor_id} = useParams()

    console.log(actorDetail);

    useEffect(() => {
        getActorDetail(actor_id,APIKEY)
    },[])

    return(
        <><div id="actorDetail">
            <div className="container">
                <div className="actorDetail">
                    <div className="actor_photo">
                        <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${actorDetail.profile_path}`}/>
                    </div>
                    <div className="actor_info">
                        <h1>{actorDetail.name}</h1>
                        <h4>{actorDetail.place_of_birth}</h4>
                        <h5>{actorDetail.birthday}</h5>
                        <p>{actorDetail.biography}</p>
                    </div>
                </div>
            </div>
        </div>
        <ActorMovies actor_id ={actor_id}/>
</>
        
        
    )
}

export default ActorsDetail