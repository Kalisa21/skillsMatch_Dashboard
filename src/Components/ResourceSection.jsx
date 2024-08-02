import React from 'react';

const programs = [
  {
    name: "Google Data Analytics Professional Certificate",
    image: "/google-logo.webp",
    provider: "Google",
    price: "FREE"
  },
  {
    name: "Graphic Design Specialization",
    image: "/graphic.png",
    provider: "CALARTS",
    price: "FREE"
  },
  {
    name: "Career Success Specialization",
    image: "success.jpeg",
    provider: "University of California",
    price: "FREE"
  },
  {
    name: "UI / UX Design Specialization",
    image: "/UIUX.webp",
    provider: "CALARTS",
    price: "FREE"
  }
];

const ResourcesSection = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Programs</h1>
        <p>Join our upskilling sessions and gain real world experience</p>
        <p>Explore our programs. Each program offers upskilling sessions, hands-on tasks, and a certificate upon completion.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={program.image} alt={program.name} className="w-full h-32 object-cover rounded-t-lg"/>
            <h2 className="mt-2 font-semibold text-lg">{program.name}</h2>
            <p className="text-sm text-gray-500">{program.provider}</p>
            <p className="mt-2 text-blue-500">{program.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
