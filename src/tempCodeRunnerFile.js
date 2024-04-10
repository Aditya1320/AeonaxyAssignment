<div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
<div className="max-w-md w-full px-8 py-12 bg-white shadow-lg rounded-lg">
  <h1 className="text-3xl font-bold mb-6 text-center">Sign up to Dribbble</h1>
  <p className="text-red-500 mb-4">Username has already been taken</p>
  <div className="mb-4">
    <label htmlFor="name" className="block font-bold mb-2">
      Name
    </label>
    <input
      type="text"
      id="name"
      value="John"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      readOnly
    />
  </div>
  <div className="mb-4">
    <label htmlFor="username" className="block font-bold mb-2">
      Username
    </label>
    <input
      type="text"
      id="username"
      value="John"
      className="w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      value="account@refero.design"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      readOnly
    />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block font-bold mb-2">
      Password
    </label>
    <input
      type="password"
      id="password"
      placeholder="6+ characters"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="mb-6">
    <p className="text-sm text-gray-500">
      Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notification
      Settings.
    </p>
  </div>
  <button className="w-full py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors duration-300">
    Create Account
  </button>
  <p className="mt-4 text-sm text-gray-500">
    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
  </p>
</div>
<p className="mt-4 text-gray-500">Art by Peter Tarka</p>
</div>
);
};
