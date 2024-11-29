/* This code snippet is a React component called `FavoritesPage`. Here's a breakdown of what it does: */
import React, { useEffect, useState } from 'react';

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (episodeId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== episodeId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <div key={fav.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={fav.image}
                alt={fav.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold">{fav.title}</h2>
              <button
                onClick={() => removeFromFavorites(fav.id)}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;