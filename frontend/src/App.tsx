import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Dashboard from './components/FunctionPage/dashboard';

function App() {
  return (
    <Router>
    <Routes>
      {/* Define the route for the login page */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
