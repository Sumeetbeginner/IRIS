// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import SimulationGame from './components/SimulationGame';
import QuizGame from './components/QuizGame';
import CodingGame from './components/CodingGame';
import DashBoard from './components/DashBoard';
import Councelling from './components/Councelling';
import Roadmap from './components/Roadmap';
import Clubs from './components/Clubs';
import Assessment from './components/Assessment';
import './index.css'

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
        <Route path="/dashboard" element={< DashBoard/>} />
        <Route path="/councelling" element={< Councelling/>} />
        <Route path="/roadmap" element={< Roadmap/>} />
        <Route path="/clubs" element={< Clubs/>} />
        <Route path="/assessment" element={< Assessment/>} />

      </Routes>
    </Router>
  );
};

export default App;
