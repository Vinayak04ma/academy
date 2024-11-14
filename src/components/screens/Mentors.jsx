import React, { useEffect, useState } from 'react';
import mentorsData from '../../data/mentors.json'; // Assuming you place the json file in the src folder

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    setMentors(mentorsData); // Set data from JSON file
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-50" id="mentors">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 ">
          Meet Our Top Mentors
        </h2>
        {/* Description */}
        <p className="text-lg text-gray-600 mt-10 mb-12">
          Our mentors are passionate educators with years of experience in their
          respective fields. They are dedicated to guiding you on your learning
          journey, ensuring you receive the best possible education.
        </p>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 mx-auto mt-6 mb-4 overflow-hidden rounded-full border-4 border-gray-200">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                <p className="text-sm text-gray-500">{mentor.field}</p>
                <p className="mt-4 text-gray-700">{mentor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;

