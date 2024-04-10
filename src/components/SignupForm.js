import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSubmit = async () => {
    setIsCreatingAccount(true);
    try {
      // Make API request to create a new account
      const response = await axios.post('/api/signup', {
        name,
        username,
        email,
        password
      });
      console.log('Account created:', response.data);
      // Optionally, redirect to a different page or show a success message
    } catch (error) {
      console.error('Error creating account:', error);
      // Handle error (e.g., display error message to user)
    } finally {
      setIsCreatingAccount(false);
    }
    // navigate('/create-profile');
    navigate(`/create-profile?email=${encodeURIComponent(email)}`);
  };


  const handleUsernameChange = async (value) => {
    setUsername(value);
    // Check if the entered username already exists
    try {
      const response = await axios.get(`http://localhost:3013/api/checkUsername?username=${value}`);
      if (response.data.exists) {
        setUsernameError('Username already exists');
      } else {
        setUsernameError('');
      }
    } catch (error) {
      console.error('Error checking username:', error);
      setUsernameError('Error checking username');
    }
  };

  const handleEmailChange = async (value) => {
    setEmail(value);
    // Check if the entered email already exists
    try {
      const response = await axios.get(`http://localhost:3013/api/checkEmail?email=${value}`);
      if (response.data.exists) {
        setEmailError('Email already exists');
      } else {
        setEmailError('');
      }
    } catch (error) {
      console.error('Error checking email:', error);
      setEmailError('Error checking email');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
      <div className="max-w-md w-full px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign up to Dribbble
        </h1>
        {/* <p className="text-red-500 mb-4">Username has already been taken</p> */}
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value= {name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value= {username} 
            onChange={(e) => handleUsernameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {usernameError && <p>{usernameError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="6+ characters"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Creating an account means you're okay with our Terms of Service,
            Privacy Policy, and our default Notification Settings.
          </p>
        </div>
        <button 
        type='submit'
        disabled={usernameError || emailError || isCreatingAccount}
        onClick= {handleSubmit}
        className="w-full py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors duration-300">
         {isCreatingAccount ? 'Creating Account...' : 'Create Account'}
        </button>
        </form>
        <p className="mt-4 text-sm text-gray-500">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
      <p className="mt-4 text-gray-500">Art by Peter Tarka</p>
    </div>
  );
};
export default SignupForm;