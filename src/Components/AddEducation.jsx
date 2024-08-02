import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEducation = () => {
  const [institution, setInstitution] = useState('');
  const [level, setLevel] = useState('');
  const [program, setProgram] = useState('');
  const [startYear, setStartYear] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ institution, level, program, startYear, graduationYear });
    navigate('/education'); // Redirect to the education page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Education</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="institution" className="block text-gray-700">Select Institution</label>
            <input
              type="text"
              id="institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="level" className="block text-gray-700">Education Level</label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="">Select Education Level</option>
              <option value="High School">High School</option>
              <option value="Associate's Degree">Associate's Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Doctorate">Doctorate</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="program" className="block text-gray-700">Education Program</label>
            <input
              type="text"
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startYear" className="block text-gray-700">Start Year</label>
            <input
              type="number"
              id="startYear"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="graduationYear" className="block text-gray-700">Graduation Year</label>
            <input
              type="number"
              id="graduationYear"
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddEducation;
