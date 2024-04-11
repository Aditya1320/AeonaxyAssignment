import React from 'react';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {

  const location = useLocation();
  const userEmail = new URLSearchParams(location.search).get('email');

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-black-500 mr-4 font-cedarville">
              dribbble
            </a>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Inspiration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Find Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Learn Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Go Pro
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Hire Designers
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
            <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Upload
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Please verify your email...</h1>
          <div className="flex justify-center mb-6">
            <div className="bg-gray-200 rounded-full p-4">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 mb-4">Please verify your email address. We've sent a confirmation email to:</p>
          <p className="font-mono mb-6"> {userEmail}</p>
          <p className="text-gray-600 mb-4">Click the confirmation link in that email to begin using Dribbble.</p>
          <p className="text-gray-600 mb-6">
            Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can{' '}
            <a href="#" className="text-pink-500 hover:text-pink-600">
              resend the confirmation email
            </a>
            .
          </p>
          <p className="text-gray-600">
            Wrong email address?{' '}
            <a href="#" className="text-pink-500 hover:text-pink-600">
              Change it
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 md:grid-cols-6 gap-8">
          <div>
          <h1 className="text-2xl font-bold text-pink-500 font-cedarville">dribbble</h1>
            <p className="text-gray-600 mt-4">
              Dribbble is the world's leading community for creatives to share, grow, and get hired.
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 16 16" id="twitter"><path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"/></svg>
              </a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="17" viewBox="0 0 16 16" id="facebook"><path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h6v-5.5H6V8h2V6a3 3 0 0 1 3-3h2v2.5h-1c-.552 0-1-.052-1 .5v2h2.5l-1 2.5H11V16h3c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"/></svg>
              </a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 999.9 999.9" id="pinterest"><path d="M0 500c2.6-141.9 52.7-260.4 150.4-355.4S364.6 1.3 500 0c145.8 2.6 265.3 52.4 358.4 149.4 93.1 97 140.3 213.9 141.6 350.6-2.6 140.6-52.7 258.8-150.4 354.5-97.7 95.6-214.2 144.1-349.6 145.4-46.9 0-93.7-7.2-140.6-21.5 9.1-14.3 18.2-30.6 27.3-48.8 10.4-22.1 23.4-63.8 39.1-125 3.9-16.9 9.8-39.7 17.6-68.4 9.1 15.6 24.7 29.9 46.9 43 58.6 27.3 120.4 24.7 185.5-7.8 67.7-39.1 114.6-99.6 140.6-181.6 23.4-85.9 20.5-165.7-8.8-239.2C778.3 277 725.9 224 650.4 191.4c-95-27.3-187.5-24.4-277.3 8.8s-152.3 90.2-187.5 170.9C176.5 401 171 430.7 169 460c-2 29.3-1 57.9 2.9 85.9s13.7 53.1 29.3 75.2 36.5 39.1 62.5 50.8c6.5 2.6 11.7 2.6 15.6 0 5.2-2.6 10.4-13 15.6-31.2 5.2-18.2 7.2-30.6 5.9-37.1-1.3-2.6-3.9-7.2-7.8-13.7-27.3-44.3-36.5-90.8-27.3-139.6 9.1-48.8 29.3-90.2 60.5-124 48.2-43 104.5-66.4 168.9-70.3 64.4-3.9 119.5 13.7 165 52.7 24.7 28.6 40.7 63.1 47.8 103.5s7.2 79.1 0 116.2c-7.2 37.1-19.9 71.9-38.1 104.5-32.6 50.8-71 76.8-115.2 78.1-26-1.3-47.2-11.4-63.5-30.3s-21.2-40.7-14.6-65.4c2.6-14.3 10.4-42.3 23.4-84 13-41.7 20.2-72.9 21.5-93.7-3.9-49.5-26.7-74.9-68.4-76.2-32.6 3.9-56.6 18.6-72.3 43.9s-24.1 54.4-25.4 86.9c3.9 37.8 9.8 63.8 17.6 78.1-14.3 58.6-25.4 105.5-33.2 140.6-2.6 9.1-9.8 37.1-21.5 84s-18.2 82.7-19.5 107.4V957C206.3 914 133.3 851.9 80 770.5 26.7 689.1 0 598.9 0 500z"/></svg>
              </a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 2476 2476" id="instagram"><path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"/></svg>
              </a>
              <a href="#" className="mr-4 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 16 16" id="youtube"><path fill-rule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>
            <div>
              <h3 className="text-lg font-bold mb-4">For designers</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Go Pro!
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Explore design work
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Design blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Overtime podcast
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Playoffs
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Weekly Warm-Up
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Refer a Friend
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Code of conduct
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hire designers</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                   Post a job opening
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Post a freelance project
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Search for designers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800 font-bold">
                    Brands
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Advertise with us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                   About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Media Kit
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    testimonials
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    API
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                   Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Directories</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                   Design job
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Designers for hire
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Freelance designers for hire
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    tags
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    places
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800 font-bold">
                    Design assets
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                   Dribbble market place
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Creative market
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Fontspring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-800">
                    Font squirrel
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Design Resources</h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                   Freelancing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Design hiring
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Design Portfolio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800 ">
                  Design Education
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    creative process
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-800">
                    Design industry trends
                  </a>
                </li>
              </ul>
            </div>
           { /* Remaining footer sections */}
          </div>
          </div>
      </footer>
    </div>
  );
};

export default VerifyEmail;
