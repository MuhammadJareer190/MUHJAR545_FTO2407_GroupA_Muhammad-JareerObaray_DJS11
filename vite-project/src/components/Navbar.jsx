/**
 * The Navbar component in this code snippet creates a navigation bar with links to the home page and
 * favorites page.
 * @returns The Navbar component is being returned. It is a functional component that renders a
 * navigation bar with links to the home page and favorites page.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-lime-600 text-white fixed top-0 left-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold">
          PodSphere
        </Link>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="hover:text-gray-200 transition duration-200"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};
