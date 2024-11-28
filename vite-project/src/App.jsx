import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Navbar } from "./components/Navbar";
import { HomePage } from './pages/HomePage';
import { ShowPage } from './pages/ShowPage';
import { FavoritesPage } from './pages/FavoritesPage';

function App()  {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Router>
        <Navbar />
        <div className='pt-16 max-w-6xl mx-auto px-4'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
