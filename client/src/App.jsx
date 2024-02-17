// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
         
      </Routes>
    </Router>
  );
};

export default App;
