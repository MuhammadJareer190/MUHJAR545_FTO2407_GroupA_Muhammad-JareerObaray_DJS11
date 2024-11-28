import React from "react";
import { genreMap } from "../utils/genreMapper";

export const FavoritesPage = ({ favorites }) => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((fav) => (
            <div key={fav.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold">{fav.title}</h2>
              <p>Genres: {fav.genres.map((id) => genreMap[id]).join(", ")}</p>
              <p>Added: {new Date(fav.addedAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  