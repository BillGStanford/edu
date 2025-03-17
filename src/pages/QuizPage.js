import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes, FaArrowLeft } from 'react-icons/fa';
import courseData from '../data/courseData';

const QuizPage = () => {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Find the course and quiz from the courseData
    const course = courseData.courses.find(c => c.id === courseId);
    
    if (course) {
      setCurrentCourse(course);
      const quiz = course.quizzes.find(q => q.id === quizId);
      
      if (quiz) {
        setCurrentQuiz(quiz);
      } else {
        // Quiz not found, redirect to course page
        navigate(`/courses/${courseId}`);
      }
    } else {
      // Course not found, redirect to courses page
      navigate('/courses');
    }
  }, [courseId, quizId, navigate]);

  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    // Check if answer is correct
    if (currentQuiz.questions[currentQuestionIndex].correctAnswer === answerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (!currentQuiz || !currentCourse) {
    return (
      <div className="container-custom py-10">
        <div className="text-center">
          <p>Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const passPercentage = 70;
    const userPercentage = (score / currentQuiz.questions.length) * 100;
    const isPassed = userPercentage >= passPercentage;
    
    return (
      <div className="container-custom py-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Quiz Results</h2>
            
            <div className="mb-6 text-center">
              <div className={`text-5xl font-bold mb-2 ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                {userPercentage.toFixed(0)}%
              </div>
              <p className="text-lg">
                You scored {score} out of {currentQuiz.questions.length} questions
              </p>
            </div>
            
            <div className="mb-8 text-center">
              {isPassed ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md">
                  <FaCheck className="inline mr-2" />
                  Congratulations! You've passed the quiz.
                </div>
              ) : (
                <div className="bg-red-100 text-red-800 p-4 rounded-md">
                  <FaTimes className="inline mr-2" />
                  You didn't pass this time. Try reviewing the material and try again.
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleRestartQuiz}
                className="btn-secondary"
              >
                Restart Quiz
              </button>
              <Link
                to={`/courses/${courseId}`}
                className="btn-primary"
              >
                Back to Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  return (
    <div className="container-custom py-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Link to={`/courses/${courseId}`} className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <FaArrowLeft className="mr-2" /> Back to Course
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{currentQuiz.title}</h2>
            <p className="text-secondary-600">{currentQuiz.description}</p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}</span>
              <span className="text-sm font-medium">Score: {score}</span>
            </div>
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: `${((currentQuestionIndex) / currentQuiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">{currentQuestion.question}</h3>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-md border ${
                    selectedAnswer === index 
                    ? isAnswered
                      ? index === currentQuestion.correctAnswer 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-red-500 bg-red-50'
                      : 'border-primary-500 bg-primary-50'
                    : 'border-secondary-300 hover:border-primary-500 hover:bg-primary-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                      selectedAnswer === index 
                      ? isAnswered
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-primary-500 text-white'
                      : 'border border-secondary-400'
                    }`}>
                      {selectedAnswer === index && isAnswered && index === currentQuestion.correctAnswer && (
                        <FaCheck className="text-sm" />
                      )}
                      {selectedAnswer === index && isAnswered && index !== currentQuestion.correctAnswer && (
                        <FaTimes className="text-sm" />
                      )}
                      {(selectedAnswer !== index || !isAnswered) && (
                        <span className="text-sm">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {isAnswered && (
            <div className={`p-4 mb-6 rounded-md ${
              selectedAnswer === currentQuestion.correctAnswer 
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
            }`}>
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <p className="font-medium">Correct! Well done.</p>
              ) : (
                <p className="font-medium">
                  Incorrect. The correct answer is: {currentQuestion.options[currentQuestion.correctAnswer]}
                </p>
              )}
            </div>
          )}
          
          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={!isAnswered}
              className={`btn-primary ${!isAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;