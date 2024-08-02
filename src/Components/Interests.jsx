import React, { useState } from 'react';

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    'Soft Skills', 'Sales', 'Software Development', 'Marketing', 'Customer Service', 'Finance',
    'Human Resources (HRM)', 'Design', 'Project Management', 'Product Management', 'Data Science',
    'Management', 'Education', 'Business Administration', 'Other', 'Computer Literacy', 'Healthcare',
    'Tourism', 'Agriculture', 'Biotechnology', 'Aerospace', 'Mining', 'Transportation',
    'Sustainability', 'Urbanization'
  ];

  const toggleInterest = (interest) => {
    setSelectedInterests((prevSelectedInterests) =>
      prevSelectedInterests.includes(interest)
        ? prevSelectedInterests.filter((i) => i !== interest)
        : [...prevSelectedInterests, interest]
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Your Interests</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`py-2 px-4 rounded-full ${
              selectedInterests.includes(interest) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
      <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Save</button>
    </div>
  );
};

export default Interests;
