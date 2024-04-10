import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
// import IllustrationSection from './components/IllustrationSection';
import CreateProfilePage from './components/CreateProfilePage';
import WhatBringsYou from './components/WhatBringsYou';
import VerifyEmail from './components/VerifyEmail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignupForm/>} />
        <Route path="/create-profile" element={<CreateProfilePage/>} />
        <Route path="/what-next" element={<WhatBringsYou/>} />
        <Route path="/email-verify" element={<VerifyEmail/>} />
      </Routes>
    </Router>
  );
};

export default App;
