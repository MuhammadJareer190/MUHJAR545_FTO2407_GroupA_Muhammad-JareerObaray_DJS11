import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import { Navbar } from "./components/Navbar";
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ShowPage } from './pages/ShowPage';
import ShowDetails from './components/ShowDetails';


function App() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (episode) => {
    if (!favorites.some((fav) => fav.id === episode.id)) {
      setFavorites([...favorites, episode]);
    }
  };

  const handleRemoveFromFavorites = (episodeId) => {
    setFavorites(favorites.filter((fav) => fav.id !== episodeId));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/show/:id"
          element={<ShowDetails onAddToFavorites={handleAddToFavorites} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} onRemoveFromFavorites={handleRemoveFromFavorites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
