import { useState } from "react";

export function useProfileVisual(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]); 
    }
  }
  const back = () => {
    const prevItem = [...history.slice(0, -1)];
    if (history.length !== 1) {
      setMode(prevItem[prevItem.length - 1])
      setHistory(prev => [...prev.slice(0, -1)]);
    }
  }

  return { mode, transition, back };
}