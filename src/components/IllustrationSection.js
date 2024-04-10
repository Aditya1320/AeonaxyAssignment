import React from 'react';

const IllustrationSection = () => {
  return (
    <div className="flex-1 bg-yellow-100 p-8 flex items-center justify-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-4">Discover the world's top Designers & Creatives.</h1>
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-pink-100"></div>
          <div className="absolute -right-8 -bottom-8 h-12 w-12 rounded-full bg-teal-100"></div>
          <div className="relative flex items-center justify-center h-96 bg-white rounded-lg shadow-lg p-4">
            <div className="bg-teal-100 rounded-full h-16 w-16 flex items-center justify-center">
              <svg className="h-8 w-8 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
              </svg>
            </div>
            <div className="bg-pink-100 rounded-full h-10 w-10 flex items-center justify-center ml-6">
              <svg className="h-6 w-6 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 ml-auto">
              <svg className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationSection;