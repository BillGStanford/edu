import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseCatalog from './pages/CourseCatalog';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/courses/:courseId" element={<CoursePage />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
            <Route path="/courses/:courseId/quizzes/:quizId" element={<QuizPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;