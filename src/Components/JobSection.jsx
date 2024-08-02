import React, { useState } from 'react';
import DashNavbar from './Dashnavbar';
import Jobs from './Jobs';

const JobSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#CCD0CF]">
      <DashNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={`flex-1 ${
          sidebarOpen ? 'ml-52' : '-ml-10'
        } p-6 pt-20 transition-all duration-500`}
      >
        <h1 className="font-bold text-4xl mb-6">Skills Match</h1>
         <Jobs/>
      </div>
    </div>
  );
};

export default JobSection;
