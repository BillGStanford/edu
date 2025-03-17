import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaCheckCircle, 
  FaRegCircle, 
  FaDownload, 
  FaYoutube,
  FaQuestionCircle,
  FaPlayCircle,
  FaVideo,
  FaTimesCircle
} from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';
import ReactMarkdown from 'react-markdown';
import courseDataImport from '../data/courseData';

const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [notes, setNotes] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showVideoSelector, setShowVideoSelector] = useState(false);

  // Load course and lesson data
  useEffect(() => {
    const foundCourse = courseDataImport.courses.find(c => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
      
      const foundLessonIndex = foundCourse.lessons.findIndex(l => l.id === lessonId);
      
      if (foundLessonIndex !== -1) {
        setLesson(foundCourse.lessons[foundLessonIndex]);
        setLessonIndex(foundLessonIndex);
        
        // Check if lesson is completed
        const completedLessons = JSON.parse(localStorage.getItem(`${courseId}_completed`) || '[]');
        setIsCompleted(completedLessons.includes(lessonId));
        
        // Load saved notes for this lesson
        const savedNotes = localStorage.getItem(`notes_${courseId}_${lessonId}`);
        if (savedNotes) {
          setNotes(savedNotes);
        }

        // Find related video for this lesson
        if (foundCourse.lessonVideos) {
          const lessonVideo = foundCourse.lessonVideos.find(v => v.lessonId === lessonId);
          if (lessonVideo) {
            setCurrentVideo(lessonVideo);
          }
        }
      } else {
        navigate(`/courses/${courseId}`);
      }
    } else {
      navigate('/courses');
    }
  }, [courseId, lessonId, navigate]);

  // Handle navigation to the next/previous lesson
  const navigateToLesson = (direction) => {
    if (!course || !course.lessons) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = lessonIndex + 1;
      if (newIndex >= course.lessons.length) {
        // If we're at the last lesson, check if there's a quiz
        if (course.quizzes && course.quizzes.length > 0) {
          navigate(`/courses/${courseId}/quizzes/${course.quizzes[0].id}`);
          return;
        }
        // Otherwise go back to the course page
        navigate(`/courses/${courseId}`);
        return;
      }
    } else {
      newIndex = lessonIndex - 1;
      if (newIndex < 0) {
        navigate(`/courses/${courseId}`);
        return;
      }
    }
    
    navigate(`/courses/${courseId}/lessons/${course.lessons[newIndex].id}`);
  };

  // Handle marking lesson as complete
  const toggleLessonComplete = () => {
    const completedLessons = JSON.parse(localStorage.getItem(`${courseId}_completed`) || '[]');
    
    if (isCompleted) {
      // Remove from completed lessons
      const updatedLessons = completedLessons.filter(id => id !== lessonId);
      localStorage.setItem(`${courseId}_completed`, JSON.stringify(updatedLessons));
    } else {
      // Add to completed lessons
      completedLessons.push(lessonId);
      localStorage.setItem(`${courseId}_completed`, JSON.stringify(completedLessons));
    }
    
    setIsCompleted(!isCompleted);
    
    // Update overall course progress
    if (course) {
      const progressPercentage = Math.round((completedLessons.length / course.lessons.length) * 100);
      localStorage.setItem(`progress_${courseId}`, progressPercentage.toString());
    }
  };

  // Change the current video
  const changeVideo = (video) => {
    setCurrentVideo(video);
    setShowVideoSelector(false);
    
    // Save the last watched video for this lesson
    localStorage.setItem(`last_video_${courseId}_${lessonId}`, video.videoUrl);
  };

  // Toggle video selector
  const toggleVideoSelector = () => {
    setShowVideoSelector(!showVideoSelector);
  };

  // Save notes
  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    localStorage.setItem(`notes_${courseId}_${lessonId}`, newNotes);
  };

  if (!course || !lesson) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-xl">Loading lesson content...</p>
      </div>
    );
  }

  const lessonContent = `
# ${lesson.title}

${lesson.content}

## Learning Objectives

- Understand the core concepts of ${lesson.title}
- Apply the knowledge in practical scenarios
- Complete the exercises at the end of this lesson

## Content Overview

This is a detailed lesson about ${lesson.title}. The video above will guide you through the main concepts.

## Exercise

1. Practice what you've learned by creating a simple example
2. Review the key points from the video
3. Try to explain the concepts in your own words

## Summary

Congratulations on completing this lesson! Make sure to mark it as complete and proceed to the next one.
  `;

  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to={`/courses/${courseId}`} className="text-primary-600 hover:text-primary-700 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Course
          </Link>
        </div>

        {/* Lesson Progress */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
          <button
            onClick={toggleLessonComplete}
            className={`flex items-center ${isCompleted ? 'text-green-600' : 'text-secondary-400'}`}
          >
            {isCompleted ? <FaCheckCircle className="mr-2" /> : <FaRegCircle className="mr-2" />}
            {isCompleted ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-secondary-200 rounded-full h-2.5">
            <div 
              className="bg-primary-600 h-2.5 rounded-full" 
              style={{ width: `${((lessonIndex + 1) / course.lessons.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-right text-sm text-secondary-600 mt-1">
            Lesson {lessonIndex + 1} of {course.lessons.length}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Video Player with Video Selector button */}
            <div className="relative">
              {/* Video title and selector */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">{currentVideo ? currentVideo.title : 'Lesson Video'}</h3>
                <button
                  onClick={toggleVideoSelector}
                  className="flex items-center text-primary-600 hover:text-primary-700"
                >
                  <FaVideo className="mr-1" /> {showVideoSelector ? 'Hide Videos' : 'Change Video'}
                </button>
              </div>
              
              {/* Video selector dropdown */}
              {showVideoSelector && course.lessonVideos && (
                <div className="absolute z-10 right-0 mt-1 bg-white shadow-lg rounded-lg border border-secondary-200 p-3 w-full lg:w-2/3">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Available Videos</h4>
                    <button onClick={() => setShowVideoSelector(false)} className="text-secondary-500 hover:text-secondary-700">
                      <FaTimesCircle />
                    </button>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {course.lessonVideos
                      .filter(video => video.lessonId === lessonId || video.lessonId === 'common')
                      .map((video, index) => (
                        <div 
                          key={index} 
                          className={`p-2 rounded-md cursor-pointer hover:bg-secondary-100 flex items-start ${currentVideo && currentVideo.videoUrl === video.videoUrl ? 'bg-primary-100' : ''}`}
                          onClick={() => changeVideo(video)}
                        >
                          <FaPlayCircle className="mt-1 mr-2 text-primary-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium">{video.title}</div>
                            <div className="text-sm text-secondary-600">{video.duration} · {video.description}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden mb-8 aspect-w-16 aspect-h-9 relative">
                {currentVideo ? (
                  <div style={{ paddingTop: '56.25%', position: 'relative' }}>
                    <ReactPlayer
                      url={currentVideo.videoUrl}
                      controls
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full" style={{ minHeight: '300px' }}>
                    <p className="text-white">No video available for this lesson</p>
                  </div>
                )}
              </div>
            </div>

            {/* Lesson Content */}
            <div className="prose max-w-none">
              <ReactMarkdown>{lessonContent}</ReactMarkdown>
            </div>

            {/* Downloadable Resources */}
            <div className="mt-8 p-4 border border-secondary-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Downloadable Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-700">
                    <FaDownload className="mr-2" /> Lesson Slides (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-700">
                    <FaDownload className="mr-2" /> Practice Exercises
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-700">
                    <FaDownload className="mr-2" /> Code Examples
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => navigateToLesson('prev')}
                className="btn-secondary flex items-center"
                disabled={lessonIndex === 0}
              >
                <FaArrowLeft className="mr-2" /> Previous Lesson
              </button>
              <button
                onClick={() => navigateToLesson('next')}
                className="btn-primary flex items-center"
              >
                {lessonIndex === course.lessons.length - 1 ? 'Finish Course' : 'Next Lesson'} <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Additional Videos Section */}
            {course.lessonVideos && course.lessonVideos.filter(v => v.lessonId === lessonId).length > 0 && (
              <div className="bg-secondary-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Lesson Videos</h3>
                <ul className="space-y-3">
                  {course.lessonVideos
                    .filter(video => video.lessonId === lessonId)
                    .map((video, index) => (
                      <li key={index} className="group">
                        <button
                          onClick={() => changeVideo(video)}
                          className={`w-full text-left p-2 rounded-md hover:bg-secondary-100 flex items-start ${
                            currentVideo && currentVideo.videoUrl === video.videoUrl ? 'bg-primary-100' : ''
                          }`}
                        >
                          <FaPlayCircle className="mt-1 mr-2 text-primary-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium">{video.title}</div>
                            <div className="text-sm text-secondary-600">{video.duration}</div>
                            <div className="text-sm text-secondary-500 mt-1">{video.description}</div>
                          </div>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Course Outline */}
            <div className="bg-secondary-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Course Outline</h3>
              <ul className="space-y-2">
                {course.lessons.map((l, index) => {
                  const completedLessons = JSON.parse(localStorage.getItem(`${courseId}_completed`) || '[]');
                  const isLessonCompleted = completedLessons.includes(l.id);
                  
                  return (
                    <li key={l.id}>
                      <Link
                        to={`/courses/${courseId}/lessons/${l.id}`}
                        className={`flex items-center p-2 rounded-md ${l.id === lessonId ? 'bg-primary-100 text-primary-700' : ''}`}
                      >
                        <span className="mr-2">
                          {isLessonCompleted ? 
                            <FaCheckCircle className="text-green-500" /> : 
                            <span className="text-secondary-400">{index + 1}.</span>
                          }
                        </span>
                        <span className={`${l.id === lessonId ? 'font-medium' : ''}`}>{l.title}</span>
                        <span className="ml-auto text-secondary-500 text-sm">{l.duration}</span>
                      </Link>
                    </li>
                  );
                  })}
                  
                  {/* Quizzes */}
                  {course.quizzes && course.quizzes.map((quiz) => (
                    <li key={quiz.id}>
                      <Link 
                        to={`/courses/${courseId}/quizzes/${quiz.id}`}
                        className="flex items-center p-2 rounded-md"
                      >
                        <span className="mr-2 text-secondary-400">
                          <FaQuestionCircle />
                        </span>
                        <span>{quiz.title}</span>
                      </Link>
                    </li>
                  ))}
                  </ul>
                  </div>
                  
                  {/* Notes Section */}
                  <div className="bg-secondary-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Your Notes</h3>
                    <textarea
                      value={notes}
                      onChange={handleNotesChange}
                      className="form-input w-full min-h-[200px] resize-y"
                      placeholder="Take notes here..."
                    ></textarea>
                    <p className="text-xs text-secondary-500 mt-2">
                      Notes are saved automatically and stored locally on your device.
                    </p>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  );
                  };
                  
                  export default LessonPage;