const gameStateKey = "gameState";

export const saveGameStateToLocalStorage = (gameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState));
};

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey);
  return state ? JSON.parse(state) : null;
};

const gameStatKey = "gameStats";

export const saveStatsToLocalStorage = (gameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats));
};

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey);
  return stats ? JSON.parse(stats) : null;
};

// local-storage.js
export const saveSelectedDatasetToLocalStorage = (dataset) => {
  localStorage.setItem("selectedDataset", JSON.stringify(dataset));
};

export const loadSelectedDatasetFromLocalStorage = () => {
  const dataset = localStorage.getItem("selectedDataset");
  return dataset ? JSON.parse(dataset) : null;
};
