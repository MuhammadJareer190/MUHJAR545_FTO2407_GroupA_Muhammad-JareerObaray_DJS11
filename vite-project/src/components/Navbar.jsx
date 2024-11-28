import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <h1 className="text-lg font-semibold">
            <Link to="/">PodSphere</Link>
          </h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link to="/favorites" className="hover:text-yellow-300">
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
