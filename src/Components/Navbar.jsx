import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">Job Board</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Jobs</a>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Companies</a>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Profiles</a>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">My Account</a>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Post a Job</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
