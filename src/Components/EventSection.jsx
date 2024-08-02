import React from 'react';

const EventSearch = () => {
  return (
    <div className="p-6">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <input 
          type="text" 
          placeholder="Keywords" 
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Location" 
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select Date Range</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
        <select className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Choose an Event Category</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Business</option>
          <option>Education</option>
        </select>
        <select className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Choose an Event Type</option>
          <option>Conference</option>
          <option>Webinar</option>
          <option>Workshop</option>
          <option>Meetup</option>
        </select>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-blue-600">Featured Events</h2>
        {/* Add event listings here */}
      </div>
    </div>
  );
};

export default EventSearch;
