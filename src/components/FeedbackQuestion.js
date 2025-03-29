import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const FeedbackQuestion = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Form link is stored directly in the component
  const formLink = "https://forms.gle/ueALMu1QBGT8SGUh7";
  
  // If there's no link or the component is dismissed, don't render anything
  if (!formLink || !isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary-500 p-4 mb-6 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <svg className="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-primary-700 font-medium">
              We value your feedback! Help us improve our learning platform.
            </p>
            <a 
              href={formLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-800 font-medium inline-flex items-center mt-1"
            >
              Take our short survey
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <FaTimesCircle />
        </button>
      </div>
    </div>
  );
};

export default FeedbackQuestion;