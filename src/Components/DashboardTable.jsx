import React from 'react';

const DashboardTable = () => {
  const items = [
    { title: 'Jobs', link: '#' },
    { title: 'Companies', link: '#' },
    { title: 'Profiles', link: '#' },
    { title: 'Blog', link: '#' },
    { title: 'Pricing', link: '#' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Open in new window</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t hover:bg-gray-100">
              <td className="px-4 py-2 flex items-center">
                <span className="mr-2">☰</span>
                <a href={item.link} className="text-blue-500 hover:underline">
                  {item.title}
                </a>
              </td>
              <td className="px-4 py-2 text-right">
                <button className="text-gray-500 hover:text-gray-800">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
