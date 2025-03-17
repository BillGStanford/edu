import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="container-custom py-20">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-bold mt-8 mb-4">Page Not Found</h2>
        <p className="text-lg text-secondary-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <FaArrowLeft className="mr-2" /> Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;