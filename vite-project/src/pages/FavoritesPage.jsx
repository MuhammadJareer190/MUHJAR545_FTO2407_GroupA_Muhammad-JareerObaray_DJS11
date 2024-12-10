import React, { useEffect, useState } from 'react';

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (episodeId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== episodeId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const groupedFavorites = favorites.reduce((acc, fav) => {
    if (!acc[fav.showId]) acc[fav.showId] = [];
    acc[fav.showId].push(fav);
    return acc;
  }, {});

  const handleSort = (option) => {
    let sortedFavorites;
    if (option === 'A-Z') {
      sortedFavorites = [...favorites].sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'Z-A') {
      sortedFavorites = [...favorites].sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === 'recent') {
      sortedFavorites = [...favorites].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    } else if (option === 'oldest') {
      sortedFavorites = [...favorites].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
    }
    setFavorites(sortedFavorites);
    setSortOption(option);
  };

  return (
    <div className="bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>
      <div className="flex gap-4 mb-4">
        <button onClick={() => handleSort('A-Z')} className="bg-blue-500 px-4 py-2 rounded-md">
          Sort A-Z
        </button>
        <button onClick={() => handleSort('Z-A')} className="bg-blue-500 px-4 py-2 rounded-md">
          Sort Z-A
        </button>
        <button onClick={() => handleSort('recent')} className="bg-blue-500 px-4 py-2 rounded-md">
          Sort by Most Recent
        </button>
        <button onClick={() => handleSort('oldest')} className="bg-blue-500 px-4 py-2 rounded-md">
          Sort by Oldest
        </button>
      </div>
      {Object.keys(groupedFavorites).length === 0 ? (
        <p className="text-gray-400">No favorites added yet.</p>
      ) : (
        Object.keys(groupedFavorites).map((showId) => (
          <div key={showId} className="mb-6">
            <h2 className="text-xl font-bold mb-4">{groupedFavorites[showId][0].showTitle}</h2>
            <ul>
              {groupedFavorites[showId].map((fav) => (
                <li
                  key={fav.id}
                  className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <span>
                    {fav.episodeNumber}. {fav.title}
                  </span>
                  <button
                    onClick={() => removeFromFavorites(fav.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesPage;