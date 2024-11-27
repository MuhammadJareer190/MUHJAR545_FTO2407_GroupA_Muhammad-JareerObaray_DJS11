import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <Link to="/">PodSphere</Link>
                </h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                </div>
            </div>
        </nav>
    );
};