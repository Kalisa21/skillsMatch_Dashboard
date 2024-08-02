import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-gray-100 py-4 w-full">
        <nav>
          <ul className="flex justify-around">
            <li><Link to="/interests" className="text-black no-underline">Interests</Link></li>
            <li><Link to="/profile" className="text-black no-underline">Profile</Link></li>
            <li><Link to="/education" className="text-black no-underline">Education</Link></li>
            <li><Link to="/languages" className="text-black no-underline">Languages</Link></li>
            <li><Link to="/work" className="text-black no-underline">Work</Link></li>
            <li><Link to="/tasks" className="text-black no-underline">Tasks</Link></li>
            <li><Link to="/skills" className="text-black no-underline">Skills</Link></li>
          </ul>
        </nav>
      </header>

      <div className="grid grid-cols-1 gap-5 mt-8 w-11/12 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">My Ranking & Stats</h2>
          <div className="flex flex-col items-center mt-4">
            <p className="text-6xl">0</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Take the Test</button>
            <p className="mt-2">Job Readiness Score</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">My Achievements</h2>
          <div className="flex flex-col items-center mt-4">
            <img src="/achievement.jpeg" alt="Badge" className="w-21 h-21 mb-7" />
      
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex justify-around items-center col-span-2">
          <div className="text-center">
            <p>Points</p>
            <p>100</p>
          </div>
          <div className="text-center">
            <p>Achievements</p>
            <p>1</p>
          </div>
          <div className="text-center">
            <p>Tasks</p>
            <p>0</p>
          </div>
          <div className="text-center">
            <p>Experiences</p>
            <p>0</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2 text-center">
          <h2 className="text-xl font-semibold">My Open Applications</h2>
          <p className="text-4xl mt-4">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-xl font-semibold">My Interests</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-gray-200 py-1 px-2 rounded">Healthcare</span>
            <span className="bg-gray-200 py-1 px-2 rounded">Software Development</span>
            <span className="bg-gray-200 py-1 px-2 rounded">Sales</span>
            <span className="bg-gray-200 py-1 px-2 rounded">Customer Service</span>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
