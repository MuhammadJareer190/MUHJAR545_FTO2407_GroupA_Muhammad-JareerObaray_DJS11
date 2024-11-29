import React from "react";
import { Link } from "react-router";
import { genreMap } from "../utils/genreMapper";


const ShowCards = ({ preview }) => {
    return (
      <Link to={`/show/${preview.id}`} className="block">
        <div className="bg-white shadow-md rounded-md overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-200">
          {/* Image Section */}
          <img
            src={preview.image}
            alt={preview.title}
            className="w-full h-48 object-cover border-b border-gray-300"
          />
          {/* Content Section */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {preview.title}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {preview.seasons} {preview.seasons === 1 ? "Season" : "Seasons"}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Genres: {preview.genres.map((id) => genreMap[id]).join(", ")}
            </p>
          </div>
        </div>
      </Link>
    );
  };
  
  export default ShowCards;