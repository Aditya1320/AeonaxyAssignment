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
  const [isChecked, setIsChecked] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSubmit = async () => {
    setIsCreatingAccount(true);
    if(!isChecked)
      {
       
        alert('Please agree to the terms to create an account.');
        return;
      }
    
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
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 bg-yellow-100">   
    <div className="flex-1 bg-yellow-100 p-8 my-8 flex items-stretch">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-4 py-4">Discover the world's top Designers & Creatives.</h1>
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-pink-100"></div>
          <div className="absolute -right-8 -bottom-8 h-12 w-12 rounded-full bg-teal-100"></div>
          <div className="relative flex items-center justify-center h-96 bg-white rounded-lg shadow-lg p-4">
            <img src="/website-design.jpg"  wiidth="1000" height="1000" className=""/>
          </div>
        </div>
      </div>
    </div>
      <div className="max-w-md w-full px-8 py-12 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign up to Dribbble
        </h1>
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
        <input
              type="checkbox"
              id="termsCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="termsCheckbox" className="text-sm text-gray-500">
              Creating an account means you're okay with our&nbsp;
              <a href="#" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Terms of Service</a>,
              &nbsp;<a href="#" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>,
              &nbsp;and our default&nbsp;
              <a href="#" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Notification Settings</a>.
            </label>
          {/* <p className="text-sm text-gray-500">
            Creating an account means you're okay with our Terms of Service,
            Privacy Policy, and our default Notification Settings.
          </p> */}
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
    </div>
  );
};
export default SignupForm;