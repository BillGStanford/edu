import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseCatalog from './pages/CourseCatalog';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import AboutUs from './pages/AboutUs';
import PartnerPage from './pages/PartnerPage';
import NotFound from './pages/NotFound';
import LoadingScreen from './components/LoadingScreen'; // Import the new LoadingScreen component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // If you want to force the loading screen to show for testing
  // Uncomment this and comment out the LoadingScreen component below
  useEffect(() => {
localStorage.removeItem('eduStaticLastLoading');
 }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <Router>
        <div className={`flex flex-col min-h-screen ${loading ? 'hidden' : ''}`}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CourseCatalog />} />
              <Route path="/courses/:courseId" element={<CoursePage />} />
              <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
              <Route path="/courses/:courseId/quizzes/:quizId" element={<QuizPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/partner" element={<PartnerPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;