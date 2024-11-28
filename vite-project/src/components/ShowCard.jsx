import React from "react";
import { Link } from "react-router";
import { genreMap } from "../utils/genreMapper";

const ShowCard = ({ show }) => {
    return (
        <div>
            <img src={show.image} alt={show.title} />
            <h2>{show.title}</h2>
            <p>{genreMap[show.genre]}</p>
            <p>Updated: {new Date(show.updated).toLocaleDateString()}</p>
            <p>Seasons: {show.seasons.length}</p>
            <Link to={`/show/${show.id}`}></Link>
        </div>
    );
};

export default ShowCard;