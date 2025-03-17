import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaChevronRight, 
  FaPlay, 
  FaFilePdf, 
  FaClipboardCheck,
  FaLock,
  FaStar
} from 'react-icons/fa';
import courseDataImport from '../data/courseData';

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [currentCourse, setCurrentCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Find the course from the imported courseData
    const course = courseDataImport.courses.find(c => c.id === courseId);
    
    if (course) {
      setCurrentCourse(course);
    } else {
      // Course not found, redirect to courses page
      navigate('/courses');
    }
  }, [courseId, navigate]);

  if (!currentCourse) {
    return (
      <div className="container-custom py-10">
        <div className="text-center">
          <p>Loading course...</p>
        </div>
      </div>
    );
  }

  // Calculate course statistics
  const totalLessons = currentCourse.lessons.length;
  const totalQuizzes = currentCourse.quizzes ? currentCourse.quizzes.length : 0;
  const courseDuration = totalLessons * 30; // Assuming 30 minutes per lesson

  return (
    <div className="bg-secondary-50 min-h-screen">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              <h1 className="text-3xl font-bold mb-4 text-white">{currentCourse.title}</h1>
              <p className="text-primary-100 mb-6">{currentCourse.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-primary-800 px-3 py-1 rounded text-sm">
                  {currentCourse.category}
                </div>
                <div className="bg-primary-800 px-3 py-1 rounded text-sm">
                  {currentCourse.level} Level
                </div>
                <div className="bg-primary-800 px-3 py-1 rounded text-sm">
                  {totalLessons} Lessons
                </div>
                <div className="bg-primary-800 px-3 py-1 rounded text-sm">
                  {courseDuration} Minutes
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={index < 4 ? "text-yellow-400" : "text-primary-300"} />
                  ))}
                </div>
                <span className="text-primary-100">4.0 (124 ratings)</span>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={currentCourse.image || "/api/placeholder/600/300"} 
                  alt={currentCourse.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Course Content</h3>
                  <ul className="text-secondary-700 mb-6">
                    <li className="flex items-center mb-3">
                      <FaChevronRight className="text-xs mr-2 text-primary-600" />
                      {totalLessons} lessons ({courseDuration} min)
                    </li>
                    <li className="flex items-center mb-3">
                      <FaChevronRight className="text-xs mr-2 text-primary-600" />
                      {totalQuizzes} quizzes
                    </li>
                    <li className="flex items-center mb-3">
                      <FaChevronRight className="text-xs mr-2 text-primary-600" />
                      Downloadable resources
                    </li>
                    <li className="flex items-center">
                      <FaChevronRight className="text-xs mr-2 text-primary-600" />
                      Full lifetime access
                    </li>
                  </ul>
                  <button className="btn-primary w-full mb-3">Enroll Now</button>
                  <p className="text-center text-sm text-secondary-500">Free access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Navigation */}
      <div className="bg-white border-b border-secondary-200 sticky top-0 z-10">
        <div className="container-custom">
          <div className="flex overflow-x-auto">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'overview' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-secondary-600 hover:border-secondary-300'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('curriculum')}
              className={`px-6 py-4 font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'curriculum' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-secondary-600 hover:border-secondary-300'
              }`}
            >
              Curriculum
            </button>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container-custom py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">About This Course</h2>
                <p className="mb-6">
                  {currentCourse.description} This comprehensive course is designed to take you from beginner to proficient, 
                  covering all the essential topics and providing hands-on practice to reinforce your learning.
                </p>
                
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Core concepts and fundamentals</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Best practices and techniques</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Hands-on projects</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span>Real-world examples</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 mb-8">
                  <li className="mb-2">Basic understanding of computers</li>
                  <li className="mb-2">No prior experience required for beginners</li>
                  <li>Desire to learn and practice</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Who This Course Is For</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-2">Beginners with no prior experience</li>
                  <li className="mb-2">Those looking to refresh their knowledge</li>
                  <li>Self-taught practitioners wanting to fill knowledge gaps</li>
                </ul>
              </div>
            )}
            
            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold">Module 1: Getting Started</h3>
                    <span className="text-sm text-secondary-500">{currentCourse.lessons.length} lessons</span>
                  </div>
                  
                  <div className="border rounded-md overflow-hidden divide-y">
                    {currentCourse.lessons.map((lesson, index) => (
                      <div key={lesson.id} className="bg-white hover:bg-secondary-50">
                        <Link 
                          to={`/courses/${currentCourse.id}/lessons/${lesson.id}`}
                          className="p-4 flex items-center"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                            <FaPlay className="text-xs" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{index + 1}. {lesson.title}</h4>
                            <p className="text-sm text-secondary-500">30 min</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                    
                    {currentCourse.quizzes && currentCourse.quizzes.map((quiz, index) => (
                      <div key={quiz.id} className="bg-white hover:bg-secondary-50">
                        <Link 
                          to={`/courses/${currentCourse.id}/quizzes/${quiz.id}`}
                          className="p-4 flex items-center"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-100 text-accent-600 mr-4">
                            <FaClipboardCheck className="text-xs" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">Quiz: {quiz.title}</h4>
                            <p className="text-sm text-secondary-500">{quiz.questions.length} questions</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                    
                    <div className="bg-white hover:bg-secondary-50">
                      <div className="p-4 flex items-center opacity-50">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-100 text-secondary-600 mr-4">
                          <FaLock className="text-xs" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium">Bonus Content (Coming Soon)</h4>
                          <p className="text-sm text-secondary-500">Advanced techniques and challenges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}{/* Resources Tab */}
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Instructor</h3>
              <div className="flex items-center mb-4">
                <img 
                  src={currentCourse.instructor?.avatar || "/api/placeholder/80/80"} 
                  alt={currentCourse.instructor?.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{currentCourse.instructor?.name}</h4>
                  <p className="text-sm text-secondary-600">{currentCourse.instructor?.role}</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-4">
                {currentCourse.instructor?.bio || "Expert with over 10 years of experience in the field. Has helped thousands of students master the subject through practical, easy-to-understand lessons."}
              </p>
              <div className="flex items-center text-sm text-secondary-600">
                <div className="flex items-center mr-4">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{currentCourse.instructor?.rating || 4.8} Instructor Rating</span>
                </div>
                <div>
                  <span>{currentCourse.instructor?.courseCount || "10"}+ Courses</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Related Courses</h3>
              <div className="space-y-4">
                <Link to="/courses/advanced-topics" className="block group">
                  <div className="flex">
                    <img 
                      src="/api/placeholder/100/60" 
                      alt="Advanced Topics" 
                      className="w-24 h-16 object-cover rounded mr-3"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary-600">Advanced Topics</h4>
                      <p className="text-sm text-secondary-500">Take your skills to the next level</p>
                    </div>
                  </div>
                </Link>
                
                <Link to="/courses/practical-applications" className="block group">
                  <div className="flex">
                    <img 
                      src="/api/placeholder/100/60" 
                      alt="Practical Applications" 
                      className="w-24 h-16 object-cover rounded mr-3"
                    />
                    <div>
                      <h4 className="font-medium group-hover:text-primary-600">Practical Applications</h4>
                      <p className="text-sm text-secondary-500">Real-world use cases and examples</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;