import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaFilter, FaSearch } from 'react-icons/fa';
import courseData from '../data/courseData'; // Import the default export

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Extract unique categories from courses
  const categories = [...new Set(courseData.courses.map(course => course.category))];
  const levels = [...new Set(courseData.courses.map(course => course.level))];

  // Filter courses based on search term, category and level
  const filteredCourses = courseData.courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="container-custom py-10">
      <h1 className="text-3xl font-bold mb-8">Course Catalog</h1>
      
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="form-input pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-500" />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="md:w-1/4">
            <select
              className="form-input w-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Level Filter */}
          <div className="md:w-1/4">
            <select
              className="form-input w-full"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">All Levels</option>
              {levels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="mb-4">
        <p className="text-secondary-600">Showing {filteredCourses.length} courses</p>
      </div>
      
      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="card transition-transform hover:scale-105">
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
                  <span className="text-sm text-secondary-500">{course.lessons.length} lessons</span>
                  {course.rating && (
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  )}
                </div>
                <Link 
                  to={`/courses/${course.id}`}
                  className="btn-primary w-full mt-4"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <FaFilter className="text-5xl text-secondary-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">No courses found</h3>
          <p className="text-secondary-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default CourseCatalog;