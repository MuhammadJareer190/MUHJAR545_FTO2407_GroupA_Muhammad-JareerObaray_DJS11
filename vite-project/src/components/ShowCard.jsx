import React from "react";
import { Link } from "react-router";
import { genreMap } from "../utils/genreMapper";

const ShowCard = ({ show }) => {
    return (
      <div className="bg-white shadow-md rounded p-4">
        <img src={show.image} alt={show.title} className="h-48 w-full object-cover rounded" />
        <h2 className="text-xl font-bold mt-2">{show.title}</h2>
        <p className="text-gray-600">{genreMap[show.genre]}</p>
        <p className="text-sm text-gray-500">Updated: {new Date(show.updated).toLocaleDateString()}</p>
        <p className="text-sm text-gray-500">Seasons: {show.seasons.length}</p>
        <Link to={`/show/${show.id}`} className="text-blue-500 mt-2 block">View Show</Link>
      </div>
    );
  };
  
  export default ShowCard;