import React from 'react';
import useDynamicTitle from '../hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle('Home | My Portfolio');

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to my professional portfolio</h1>
            <p className="text-lg text-gray-600 mb-6">Hi, I’m Mahesh Borse, a React Enthusiast with 2 year of Flutter Application Development experience.</p>
            <a
                href="/my-portfolio/projects"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
                View My Projects
            </a>
        </div>
    );
};

export default Home;
