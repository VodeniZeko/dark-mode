import { useState } from "react";

export const useLocalStorage = (key, initialState) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialState;
  });
  const setValue = newValue => {
    // Save state
    setStoredValue(newValue);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setValue];
};
