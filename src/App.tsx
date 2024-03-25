import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import GoalHomePage from './CreateGoal';
import CreateGoal from './CreateGoal';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/HomePage" Component={HomePage} />
          <Route path="/GoalHomePage" Component={GoalHomePage} />
          <Route path="/CreateGoal" Component={CreateGoal} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;