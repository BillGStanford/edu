import React from 'react';
import { FaGraduationCap, FaLightbulb, FaUsers, FaRocket, FaChalkboardTeacher } from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Natoli A.',
      role: 'Founder & CEO',
      bio: 'Educational technology pioneer with 5+ years in programming, expert knowledge on History & Language.',
      image: '/api/placeholder/400/400'
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold mb-6 text-white">Transforming Education for the Digital Age</h1>
            <p className="text-xl mb-8">We're on a mission to make high-quality education accessible, engaging, and effective for learners worldwide.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2025, EduStatic began with a simple idea: education should evolve with technology, not despite it. 
                  When traditional learning was disrupted globally, we saw an opportunity to create something better than a temporary solution.
                </p>
                <p className="text-gray-700 mb-4">
                  We assembled a team of educators, technologists, and learning designers with a shared vision of reimagining education for the digital age. 
                  Our platform combines cutting-edge technology with proven pedagogical principles to deliver learning experiences that truly engage and inspire.
                </p>
                <p className="text-gray-700">
                  Today, we serve thousands of learners across 40+ countries, but we're just getting started. Our journey continues as we expand our course offerings, 
                  enhance our platform, and push the boundaries of what's possible in online education.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img src="/api/placeholder/600/400" alt="Our Journey" className="w-full h-auto rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <FaLightbulb className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Innovation</h3>
                <p className="text-gray-700">We constantly explore new technologies and methodologies to enhance the learning experience.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <FaUsers className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Accessibility</h3>
                <p className="text-gray-700">We believe quality education should be available to everyone, regardless of location or background.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition duration-300">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <FaRocket className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Excellence</h3>
                <p className="text-gray-700">We hold ourselves to the highest standards in content quality, user experience, and student outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Our Educational Approach</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <FaChalkboardTeacher className="text-6xl text-primary-600" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Active Learning & Engagement</h3>
                  <p className="text-gray-700">Our courses go beyond passive content consumption. We incorporate interactive exercises, real-world projects, and peer collaboration to ensure deep, lasting learning outcomes.</p>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-secondary-900 mb-2">Personalized Learning Paths</h4>
                  <p className="text-gray-700">Adaptive technology helps tailor the experience to each learner's pace, preferences, and goals.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-secondary-900 mb-2">Expert-Led Content</h4>
                  <p className="text-gray-700">All courses are designed by industry professionals and academic experts with proven teaching experience.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-secondary-900 mb-2">Community-Driven</h4>
                  <p className="text-gray-700">Learning happens best in community. Our platform fosters meaningful connections between learners and instructors.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-secondary-900 mb-2">Continuous Improvement</h4>
                  <p className="text-gray-700">We constantly gather feedback and data to refine our content and platform for better learning outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;