import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChartBar, FaPalette, FaBriefcase, FaArrowRight, FaStar } from 'react-icons/fa';

// Mock data for featured courses
const featuredCourses = [
  {
    id: 'web-development-basics',
    title: 'Web Development Basics',
    description: 'Learn HTML, CSS, and JavaScript fundamentals to build your first website.',
    image: '/thumbnail-images/webdev-basics.jpg',
    category: 'Web Development',
    level: 'Beginner',
    lessons: 12,
    rating: 4.8
  },
  {
    id: 'beginners-english',
    title: 'Beginners English',
    description: 'Master fundamental English language skills for everyday communication. Learn vocabulary, grammar, pronunciation, and build confidence in speaking and writing through interactive exercises and real-world practice.',
    image: '/thumbnail-images/beginners-english.jpg',
    category: 'Language Learning',
    level: 'Beginner',
    lessons: 15,
    rating: 4.9
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Master the basics of React and build modern single-page applications. Learn component-based architecture, state management, and how to integrate with APIs.',
    image: '/thumbnail-images/react-basics.jpg',
    category: 'Web Development',
    level: 'Intermediate',
    lessons: 18,
    rating: 4.7
  },
];

// Category card component
const CategoryCard = ({ icon, title, courses, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${color} text-white`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
      </div>
      <p className="mb-3">{courses} courses</p>
      <Link to={`/courses?category=${title.toLowerCase()}`} className="inline-flex items-center text-white hover:underline">
        Explore <FaArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

// Course card component
const CourseCard = ({ course }) => {
  return (
    <div className="card transition-transform hover:scale-105">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="text-xs font-semibold text-accent-600 bg-accent-100 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="text-secondary-600 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-500">{course.lessons} lessons</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>
        <Link 
          to={`/courses/${course.id}`}
          className="btn-primary w-full mt-4"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Learn. Grow. Succeed.</h1>
              <p className="text-xl mb-8 text-primary-100">
                Discover high-quality courses that help you master new skills and achieve your goals.
                Our frontend-only platform offers a seamless learning experience.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/courses" className="btn-accent py-3 px-6 text-lg">
                  Explore Courses
                </Link>
                <Link to="/about" className="btn bg-white text-primary-700 hover:bg-primary-50 py-3 px-6 text-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/thumbnail-images/learning-picture.jpg" 
                alt="Learning Illustration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Discover our diverse range of subjects and find the perfect course to match your interests and career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard 
              icon={<FaLaptopCode className="text-3xl" />} 
              title="Web Development" 
              courses="42" 
              color="bg-primary-600"
            />
            <CategoryCard 
              icon={<FaChartBar className="text-3xl" />} 
              title="Data Science" 
              courses="28" 
              color="bg-accent-600"
            />
            <CategoryCard 
              icon={<FaPalette className="text-3xl" />} 
              title="Design" 
              courses="35" 
              color="bg-indigo-600"
            />
            <CategoryCard 
              icon={<FaBriefcase className="text-3xl" />} 
              title="Business" 
              courses="31" 
              color="bg-orange-600"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
              <p className="text-secondary-600">
                Our most popular and highly-rated courses to get you started.
              </p>
            </div>
            <Link to="/courses" className="btn-primary hidden md:inline-flex">
              View All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link to="/courses" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-accent-50 py-16">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gradient-to-br from-accent-500 to-accent-700 text-white p-10">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Learning?</h2>
                <p className="text-lg mb-8">
                  Join thousands of students who are already enhancing their skills and advancing their careers with our courses.
                </p>
                <Link to="/courses" className="btn bg-white text-accent-600 hover:bg-accent-50">
                  Get Started Today
                </Link>
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-2xl font-bold mb-4">Why Choose EduStatic?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-accent-100 rounded-full p-1 mr-4">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Quality Content</h4>
                      <p className="text-secondary-600">Expert-created courses with practical, real-world applications.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-100 rounded-full p-1 mr-4">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Self-Paced Learning</h4>
                      <p className="text-secondary-600">Learn at your own pace with lifetime access to course materials.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-100 rounded-full p-1 mr-4">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Interactive Learning</h4>
                      <p className="text-secondary-600">Quizzes, assignments, and projects to reinforce your understanding.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Hear from our community of learners about how our courses have helped them achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-secondary-600 text-sm">Web Developer</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-secondary-700">
                "The React Fundamentals course completely transformed my career. The content was easy to follow yet comprehensive, and I was able to build my portfolio with the projects."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-secondary-600 text-sm">Data Analyst</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-secondary-700">
                "The Data Science with Python course provided me with practical skills I could immediately apply in my job. The exercises were challenging and engaging."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-secondary-200">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-secondary-600 text-sm">UI/UX Designer</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-secondary-700">
                "The UI/UX Design Principles course helped me understand the psychology behind good design. I've been able to create more intuitive and user-friendly interfaces since completing it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom">

        </div>
      </section>
    </div>
  );
};

export default HomePage;