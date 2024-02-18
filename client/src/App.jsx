// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import SimulationGame from './components/SimulationGame';
import QuizGame from './components/QuizGame';
import CodingGame from './components/CodingGame';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />

        <Route path="/quizgame" element={< QuizGame/>} />
        <Route path="/codinggame" element={< CodingGame/>} />
        <Route path="/simulationgame" element={< SimulationGame/>} />

      </Routes>
    </Router>
  );
};

export default App;
