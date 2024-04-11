import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSubmit = async () => {
    setIsCreatingAccount(true);
    if (!isChecked) {
      alert("Please agree to the terms to create an account.");
      return;
    }

    try {
      // API request to create a new account
      const response = await axios.post("http://localhost:3013/api/signup", {
        name,
        username,
        email,
        password,
      });
      console.log("Account created:", response.data);
      navigate(`/create-profile?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("Error creating account:", error);
    } finally {
      setIsCreatingAccount(false);
    }
  };

  const handleUsernameChange = async (value) => {
    setUsername(value);
    // Check if the entered username already exists
    try {
      const response = await axios.get(
        `http://localhost:3013/api/checkUsername?username=${value}`
      );
      if (response.data.exists) {
        setUsernameError("Username already exists");
      } else {
        setUsernameError("");
      }
    } catch (error) {
      console.error("Error checking username:", error);
      setUsernameError("Error checking username");
    }
  };

  const handleEmailChange = async (value) => {
    setEmail(value);
    // Check if the entered email already exists
    try {
      const response = await axios.get(
        `http://localhost:3013/api/checkEmail?email=${value}`
      );
      if (response.data.exists) {
        setEmailError("Email already exists");
      } else {
        setEmailError("");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setEmailError("Error checking email");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-amber-200 p-8 flex items-center justify-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            Discover the world's top Designers & Creatives.
          </h1>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-pink-100"></div>
            <div className="absolute -right-8 -bottom-8 h-12 w-12 rounded-full bg-teal-100"></div>
            <div className="relative flex items-center justify-center h-96 bg-white rounded-lg shadow-lg p-4">
              <img
                src="/website-design.jpg"
                width="1000"
                height="1000"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-8">
        <div className="flex justify-end mb-4">
          <p>Already a member? </p>
          <a href="#" className="text-blue-500 ml-2">
            {" "}
            Sign in
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign up to Dribbble
        </h1>
         {usernameError && <p className="text-red-500 text-center" >{usernameError}</p>}
         {emailError && <p className="text-red-500 text-center">{emailError}</p>}
       <div className="max-w-sm mx-auto">
       <div className="max-w-md w-full px-0 py-0 bg-white  my-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div className="mr-2 w-1/2">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="ml-2 w-1/2">
              <label htmlFor="username" className="block font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => handleUsernameChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            </div>
          </div>

          <div className="mb-4 ">
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
          </div>
          <div className="mb-6 ">
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
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              , &nbsp;
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              , and our default&nbsp;
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notification Settings
              </a>
              .
            </label>
          </div>
          <div className="mb-6 flex justify-center">
            <button
              type="submit"
              disabled={usernameError || emailError || isCreatingAccount}
              onClick={handleSubmit}
              className=" w-64 py-3 px-4 bg-pink-500  text-white font-bold rounded-md hover:bg-pink-600 transition-colors duration-300 "
            >
              {isCreatingAccount ? "Creating Account..." : "Create Account"}
            </button>
          </div>
          <label className=" text-sm text-gray-500">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="#"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and
          <a
            href="#"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Terms of Service
          </a>{" "}
          apply.
        </label>
        </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
