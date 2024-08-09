import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Opening from './Opening'; // Assuming you have a Home component for your main page
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Carousel from './component/Carousel';
import Wordle from './pages/Wordle/Wordle';
import Connection from './components/App/Connection';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Opening />} /> {/* Home page */}
          <Route path="/home" element={<Home />} /> 
          <Route path="/quiz" element={<Quiz />} /> 
          <Route path="/Wordle" element={<Wordle />} />
          <Route path="/connection" element={<Connection />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
