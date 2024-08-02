import React from 'react';

const jobStats = [
  { label: 'New jobs', value: 30 },
  { label: 'Expired jobs', value: 0 },
  { label: 'New employers', value: 19 },
  { label: 'New professional profiles', value: 9 },
  { label: 'Sales', value: 4.99 },
  { label: 'New email subscribers', value: 4 },
  { label: 'Job views', value: 450 },
  { label: 'Job apply clicks', value: 100 },
  { label: 'Job applications', value: 3 },
];

const JobStatsTable = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-2 px-4 text-left bg-gray-100 border-b border-gray-200">
          <h2 className="text-lg font-medium">Last 30 days</h2>
        </div>
        <table className="min-w-full bg-white">
          <tbody>
            {jobStats.map((stat, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200 text-left">
                  {stat.label}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-right">
                  {stat.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobStatsTable;
