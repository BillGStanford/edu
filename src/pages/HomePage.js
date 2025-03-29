import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaChartBar, FaPalette, FaBriefcase, FaArrowRight, FaStar } from 'react-icons/fa';
import FeedbackQuestion from '../components/FeedbackQuestion'; // Import FeedbackQuestion component

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
    description: 'Master fundamental English language skills for everyday communication.',
    image: '/thumbnail-images/beginners-english.jpg',
    category: 'Language Learning',
    level: 'Beginner',
    lessons: 15,
    rating: 4.9
  },
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Master the basics of React and build modern single-page applications.',
    image: '/thumbnail-images/react-basics.jpg',
    category: 'Web Development',
    level: 'Intermediate',
    lessons: 18,
    rating: 4.7
  },
];

// Course card component with simplified design
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="text-xs font-semibold text-accent-600 bg-accent-50 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
        <p className="text-secondary-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-secondary-500">{course.lessons} lessons</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>
        <Link 
          to={`/courses/${course.id}`}
          className="mt-4 inline-block w-full text-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded transition-colors"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

// Simplified category component
const CategoryButton = ({ icon, title, color }) => {
  return (
    <Link to={`/courses?category=${title.toLowerCase()}`} className={`flex items-center p-4 rounded-lg ${color} text-white transition-transform hover:scale-105`}>
      {icon}
      <span className="ml-3 font-medium">{title}</span>
      <FaArrowRight className="ml-auto" />
    </Link>
  );
};

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Feedback Question Component */}
      <div className="container mx-auto px-4 max-w-6xl pt-6">
        <FeedbackQuestion />
      </div>
      
      {/* Simplified Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 text-white">Learn. Grow. Succeed.</h1>
              <p className="text-xl mb-6 text-primary-100">
                Discover high-quality courses to help you master new skills and achieve your goals.
              </p>
              <Link to="/courses" className="inline-block py-3 px-6 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors">
                Explore Courses
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/thumbnail-images/learning-picture.jpg" 
                alt="Learning" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories - Simplified */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryButton 
              icon={<FaLaptopCode className="text-xl" />} 
              title="Web Development" 
              color="bg-primary-600"
            />
            <CategoryButton 
              icon={<FaChartBar className="text-xl" />} 
              title="Data Science" 
              color="bg-accent-600"
            />
            <CategoryButton 
              icon={<FaPalette className="text-xl" />} 
              title="Design" 
              color="bg-indigo-600"
            />
            <CategoryButton 
              icon={<FaBriefcase className="text-xl" />} 
              title="Business" 
              color="bg-orange-600"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses - Streamlined */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-primary-600 hover:text-primary-700 font-medium">
              View All <FaArrowRight className="inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Simplified CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gradient-to-r from-accent-500 to-accent-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Ready to start your learning journey?</h2>
              <p className="mb-6">Join thousands of students advancing their skills and careers.</p>
              <Link to="/courses" className="inline-block py-2 px-6 bg-white text-accent-600 hover:bg-accent-50 rounded-lg transition-colors font-medium">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Testimonial Section - Just one highlight */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-6">Student Success Story</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/60/60" alt="Student" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-secondary-600 text-sm">Web Developer</p>
              </div>
              <div className="flex text-yellow-500 ml-auto">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="text-secondary-700">
              "The React Fundamentals course completely transformed my career. The content was easy to follow yet comprehensive, and I was able to build my portfolio with the projects."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;