import React, { useEffect, useState } from 'react';

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (episodeId) => {
    const updatedFavorites = favorites.filter(fav => fav.episodeId !== episodeId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div style={{ background: '#141414', color: 'white', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px' }}>Your Favorites</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {favorites.map((fav) => (
          <div
            key={fav.episodeId}
            style={{
              display: 'flex',
              background: '#333',
              borderRadius: '8px',
              padding: '20px',
              gap: '20px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src={fav.imageUrl}
              alt={fav.title}
              style={{
                width: '150px',
                borderRadius: '8px',
              }}
            />
            <div>
              <h2 style={{ fontSize: '24px' }}>{fav.title}</h2>
              <p>{fav.description}</p>
              <p><strong>Season:</strong> {fav.seasonTitle}</p>
              <p><strong>Episode:</strong> {fav.episodeTitle}</p>

              <button
                onClick={() => removeFromFavorites(fav.episodeId)}
                style={{
                  background: '#e50914',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}

        {favorites.length === 0 && (
          <p style={{ textAlign: 'center', color: 'gray' }}>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;