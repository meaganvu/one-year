import React, { useEffect, useState, createContext } from "react";

export const PuzzleDataContext = createContext();

function PuzzleDataProvider({ children, dataset }) {
  const [gameData, setGameData] = useState(dataset);

  useEffect(() => {
    setGameData(dataset);
  }, [dataset]);

  const categorySize = gameData[0].words.length;
  const numCategories = gameData.length;

  return (
    <PuzzleDataContext.Provider value={{ gameData, numCategories, categorySize }}>
      {children}
    </PuzzleDataContext.Provider>
  );
}

export default PuzzleDataProvider;
