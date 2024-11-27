import { useState } from 'react'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App
