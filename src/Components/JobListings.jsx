import React from 'react';

const jobListings = [
  {
    job: 'Head of Sales',
    views: 71,
    applyClicks: 15,
    posted: '3m ago',
    status: 'Expired'
  },
  {
    job: 'TEST JOB',
    views: 0,
    applyClicks: 0,
    posted: '10days ago',
    status: 'Waiting for approval'
  },
  {
    job: 'Sr. Product Manager, Starbucks Card (Sample)',
    views: 384,
    applyClicks: 4,
    posted: '1day ago',
    status: 'Active'
  },
  {
    job: 'Data Scientist, Global Supply Chain (Sample)',
    views: 315,
    applyClicks: 1,
    posted: '2days ago',
    status: 'Active'
  }
];

const JobListings = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-2 px-4 text-left bg-gray-100 border-b border-gray-200">
          <h2 className="text-lg font-medium">Posted Jobs</h2>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Job</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Posted</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Status</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <span className="block text-gray-700">{job.job}</span>
                      <span className="block text-sm text-gray-500">{job.views} views • {job.applyClicks} apply clicks</span>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{job.posted}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <span className={`inline-block py-1 px-2 rounded text-sm ${job.status === 'Expired' ? 'bg-red-200 text-red-800' : job.status === 'Waiting for approval' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>
                    {job.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">Actions</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobListings;
