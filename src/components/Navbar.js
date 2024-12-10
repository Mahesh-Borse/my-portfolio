import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold">My Portfolio</div>
                <ul className="flex space-x-6">
                    <li><Link to="/home" className="hover:text-gray-400 transition">Home</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-400 transition">Projects</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400 transition">About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400 transition">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
