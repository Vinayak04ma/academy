import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          About AcademyWallah
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
          At AcademyWallah, we believe that every student has the potential to achieve greatness. Our platform is designed to provide quality educational resources, mentorship, and learning experiences to help students unlock their true potential. With a team of passionate mentors and educators, we aim to bridge the gap between students and the best educational tools and knowledge available today.
        </p>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 mb-16">
          {/* Mission */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To provide high-quality, accessible education to students across the globe, empowering them to achieve their academic and professional goals through personalized mentorship and resources.
            </p>
          </div>
          {/* Vision */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To become a global leader in online education, fostering a community of lifelong learners who contribute to societal growth and innovation through their acquired knowledge and skills.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl text-blue-500 mb-4">500+</div>
            <p className="text-lg text-gray-600">Successful Students</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl text-green-500 mb-4">10+</div>
            <p className="text-lg text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-4xl text-red-500 mb-4">100+</div>
            <p className="text-lg text-gray-600">Courses Offered</p>
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8">
            Meet Our Team
          </h3>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <img
                  src="https://sb.kaleidousercontent.com/67418/574x435/74d8ee5821/screenshot_2022-04-25_at_16-00-23-removebg-preview.png"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">John Doe</h4>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <img
                  src="https://gaijinpot.scdn3.secure.raxcdn.com/wp-content/uploads/2012/12/job_photo_man.png"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Jane Smith</h4>
              <p className="text-sm text-gray-500">Lead Educator</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto">
                <img
                  src="https://photoaid.com/images/cms/requirements_basic_photoaid_91c1e9a782.webp?quality=80&format=webp&width=1920"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Sam Wilson</h4>
              <p className="text-sm text-gray-500">Head of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
