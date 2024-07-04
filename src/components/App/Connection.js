import React, { useState, useEffect } from "react";
import Header from "../Header";
import Game from "../Game";
import './Connection.css';
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";
import {
  saveSelectedDatasetToLocalStorage,
  loadSelectedDatasetFromLocalStorage,
} from "../../lib/local-storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const initialGameData1 = [
  {
    category: "Happy",
    words: ["Glad", "Joy", "Cheerful", "Merry"],
    difficulty: 1,
  },
  {
    category: "One",
    words: ["Ichi", "Uno", "En", "Ekahi"],
    difficulty: 2,
  },
  {
    category: "Year",
    words: ["365 Days", "52 Weeks", "0.1 Decades", "12 Months"],
    difficulty: 3,
  },
  {
    category: "Anniversary",
    words: ["Gifts", "Flowers", "Date", "Love"],
    difficulty: 4,
  },
];

const initialGameData2 = [
  {
    category: "Happy",
    words: ["Glad", "Joy", "Cheerful", "Merry"],
    difficulty: 1,
  },
  {
    category: "One",
    words: ["Ichi", "Uno", "En", "ekahi"],
    difficulty: 2,
  },
  {
    category: "Year",
    words: ["365 Days", "52 Weeks", "0.1 Decades", "12 Months"],
    difficulty: 3,
  },
  {
    category: "Anniversary",
    words: ["Gifts", "Flowers", "Date", "Love"],
    difficulty: 4,
  },
];

function Connection() {
  const [currentDataset, setCurrentDataset] = useState(() => {
    const savedDataset = loadSelectedDatasetFromLocalStorage();
    return savedDataset || initialGameData1;
  });
  const [key, setKey] = useState(0);

  useEffect(() => {
    saveSelectedDatasetToLocalStorage(currentDataset);
  }, [currentDataset]);

  const toggleDataset = () => {
    const newDataset = currentDataset === initialGameData1 ? initialGameData2 : initialGameData1;
    setCurrentDataset(newDataset);
    setKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  return (
    
    <PuzzleDataProvider key={key} dataset={currentDataset}>
      <GameStatusProvider key={key}>
        <div className = 'Connection'>
          <div className='quiz_header'>
          <Link to="/home" className="link-container">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <p>One Year with You</p>
          </Link>
        </div>
        <div className='title'> 
        <p>Connections</p>
        </div>
        <div className="wrapper">
          <Toaster />
          <Game />
          <button onClick={toggleDataset} className ='play-again'>Play Again</button>
        </div>
        </div>
      </GameStatusProvider>
    </PuzzleDataProvider>
  );
}

export default Connection;
