// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
