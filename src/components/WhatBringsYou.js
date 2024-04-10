import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Resend } from 'resend';

const WhatBringsYou = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = new URLSearchParams(location.search).get('email');
//   const resend = new Resend("re_NMUe4AEr_NoCkuYgLzJVxS5HVnqVjQiVZ");
//   const [setIsSendingEmail] = useState(false);


  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleReturn = async () => {
    navigate('/create-profile');
}
// const handleFinish = async () => {
    
//     navigate('/email-verify');
// }
// const handleFinish = async () => {
//     // setIsSendingEmail(true);
//     try {
//         resend.use(cors(corsOptions));
//         const { data, error } = await resend.emails.send({
//             from: 'Acme <onboarding@resend.dev>',
//             to: [userEmail], // Assuming userEmail is the user's email address
//             subject: 'Please verify your email',
//             html: '<p>Please verify your email to complete the signup process.</p>',
//           });
//           if (error) {
//             console.error('Error sending verification email:', error);
//             // Handle error (e.g., display error message to user)
//           } else {
//              console.log('Verification email sent:', data);
//              navigate(`/email-verify?email=${encodeURIComponent(userEmail)}`);
//           }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       // Handle error (e.g., display error message to user)
//     }
//   };
const handleFinish = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        navigate(`/email-verify?email=${encodeURIComponent(userEmail)}`);
        // Redirect or show a success message as needed
      } else {
        console.error('Failed to send email');
        // Handle error case
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error case
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex items-center px-4 py-2">
        <h1 className="text-2xl font-bold text-pink-500">dribbble</h1>
        <div className="ml-auto">
          <span className="text-gray-500 text-sm">&lt;</span>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
          <h2 className="text-2xl font-bold mb-4">What brings you to Dribbble?</h2>
          <p className="text-gray-600 mb-8">Select the options that best describe you. Don't worry, you can explore other options later.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className={`rounded-lg p-4 cursor-pointer ${selectedOptions.includes('share_work') ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => handleOptionSelect('share_work')}
            >
              <h3 className="text-lg font-bold mb-2">I'm a designer looking to share my work</h3>
              {selectedOptions.includes('share_work') && <span className="absolute top-2 right-2 h-4 w-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>}
            </div>
            <div
              className={`rounded-lg p-4 cursor-pointer ${selectedOptions.includes('hire_designer') ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => handleOptionSelect('hire_designer')}
            >
              <h3 className="text-lg font-bold mb-2">I'm looking to hire a designer</h3>
              {selectedOptions.includes('hire_designer') && <span className="absolute top-2 right-2 h-4 w-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>}
            </div>
            <div
              className={`rounded-lg p-4 cursor-pointer ${selectedOptions.includes('design_inspiration') ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => handleOptionSelect('design_inspiration')}
            >
              <h3 className="text-lg font-bold mb-2">I'm looking for design inspiration</h3>
              {selectedOptions.includes('design_inspiration') && <span className="absolute top-2 right-2 h-4 w-4 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">✓</span>}
            </div>
          </div>
          {selectedOptions.length > 0 && (
            <p className="text-gray-600 mb-8">Anything else? You can select multiple</p>
          )}
          <div className="flex justify-end">
            <button className="py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors duration-300" onClick={handleFinish}>
              Finish
            </button>
          </div>
          <button className="text-gray-500 text-sm mt-4" onClick={handleReturn}>or Press RETURN</button>
        </div>
      </div>
    </div>
  );
};

export default WhatBringsYou;
