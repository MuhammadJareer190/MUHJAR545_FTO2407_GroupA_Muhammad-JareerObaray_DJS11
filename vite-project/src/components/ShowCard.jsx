import React from "react";
import { Link } from "react-router";
import { genreMap } from "../utils/genreMapper";

const ShowCards = ({ preview }) => {
    return (
      <Link to={`/show/${preview.id}`} className="block">
        <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <img
            src={preview.image}
            alt={preview.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold truncate">{preview.title}</h2>
            <p className="text-sm text-gray-600">{preview.seasons} Seasons</p>
            <p className="text-sm text-gray-600">
              Genres: {preview.genres.map((id) => genreMap[id]).join(', ')}
            </p>
          </div>
        </div>
      </Link>
    );
  };
  
  export default ShowCards;