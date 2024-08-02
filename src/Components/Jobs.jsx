import React from 'react';

const Jobs = () => {
  const jobs = [
    {
      company: "SPENN Rwanda",
      position: "Graphic Designer",
      type: "On Site",
      daysAgo: "6 days ago",
      applied: 41,
      logo: "/spenn.png", // Add your logo paths
    },
    {
      company: "Viebeg Medical",
      position: "Sales Representative Intern",
      type: "On Site",
      daysAgo: "9 days ago",
      applied: 82,
      logo: "/viebeg.png",
    },
    {
      company: "MoneyPhone Africa",
      position: "Youth Fellow and Coordinator",
      type: "On Site",
      daysAgo: "10 days ago",
      applied: 96,
      logo: "/money.png",
    },
    {
      company: "NewCampus",
      position: "Head of Content & Comms",
      type: "Remote",
      daysAgo: "28 days ago",
      applied: 37,
      logo: "/campus.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <header className="w-full max-w-3xl mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">Join our community</button>
        </div>
        <div className="relative mt-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Search by Company name, Job title..."
          />
        </div>
      </header>
      <main className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <img src={job.logo} alt={`${job.company} logo`} className="h-10 mb-2" />
              <h3 className="text-lg font-semibold">{job.position}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-600">{job.type}</p>
              <p className="text-gray-400 text-sm">{job.daysAgo}</p>
              <p className="mt-2 text-gray-700">{job.applied} Applied</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Jobs;
