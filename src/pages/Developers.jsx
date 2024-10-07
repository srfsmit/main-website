import React from 'react';
// Assume images are imported here
import img1 from "../images/1.jpg";
// import img2 from './path/to/img2.jpg';
// ... and so on for all developer images

const DeveloperCard = ({ developer }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-orange-500 p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <img 
        src={developer.image} 
        alt={developer.name}
        className="h-auto w-full object-cover rounded-lg col-span-1"
      />
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold mb-2 text-orange-800">{developer.name}</h3>
        <p><strong>Registration No:</strong> {developer.registrationNo}</p>
        <p><strong>Institution:</strong> {developer.institution}</p>
        <p><strong>Institute email:</strong> {developer.email}</p>
        <p className="mt-4 italic text-gray-600">&quot;{developer.message}&quot;</p>
        <div className="mt-6 flex space-x-4">
          <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            LinkedIn
          </a>
          <a href={developer.instagram} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
);

const DevelopersPage = () => {
  const developers = [
    {
      name: "Developer 1",
      registrationNo: "REG001",
      institution: "Sikkim Manipal Institute of Technology",
      email: "dev1@smu.edu.in",
      linkedin: "https://www.linkedin.com/in/dev1",
      instagram: "https://www.instagram.com/dev1",
      image: img1, // Assuming img1 is imported at the top of the file
      message: "It was an amazing experience building this website. I learned a lot and enjoyed working with the team."
    },
    // ... Add 12 more developer objects with similar structure
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-800 font-satoshi text-center mb-8">
        Our Development Team
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {developers.map((developer, index) => (
          <DeveloperCard key={index} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default DevelopersPage;
