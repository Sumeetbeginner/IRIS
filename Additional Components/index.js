import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Roadmap from './components/Roadmap' //done
import LearnBoard from './components/LearnBoard'
import ClubSpace from './components/ClubSpace' //done
import BrainStorm from './components/BrainStorm' //done

import CollapsibleTable from './components/Questionpaper.tsx' //done

import Counselling from './components/Counselling.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Counselling/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
