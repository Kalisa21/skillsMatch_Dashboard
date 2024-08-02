import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // After successful login, navigate to the dashboard
    navigate('/home');
  };

  return (
    <section className="flex justify-center items-center h-screen p-5">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full text-center">
        <h3 className="mb-5 text-green-700">Log-In</h3>
        <p className="text-gray-500 mb-5">Enter email and password</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-left text-gray-500 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 mb-5 border border-gray-300 rounded" required />
          <label htmlFor="password" className="block text-left text-gray-500 mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full p-2 mb-5 border border-gray-300 rounded" required />
          <input type="submit" value="Submit" className="w-full p-2 bg-blue-700 text-white font-bold rounded-3xl cursor-pointer hover:bg-green-700" />
        </form>
        <div className="mt-5">
          <a href="/sign" className="text-green-700">Register here</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
