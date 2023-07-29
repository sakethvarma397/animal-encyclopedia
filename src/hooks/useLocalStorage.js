import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [key, localStorageValue]);

  return [localStorageValue, setLocalStorageValue];
};

export default useLocalStorage;
