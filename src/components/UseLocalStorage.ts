import { useState } from 'react';

function loadFromLocalStorage() : number {
  try {
    const storedValue = localStorage.getItem("savedNumber");
    return storedValue ? JSON.parse(storedValue) : 0;
  } catch (error) {
    console.error('Error loading from localStorage', error);
    return 0;
  }
}

export function useLocalStorage() {
  const [number, setNumber] = useState<number>(loadFromLocalStorage);

  function saveToLocalStorage(value: number) {
    try {
      localStorage.setItem("savedNumber", JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  function updateNumber(newNumber: number) {
    setNumber(newNumber);
    saveToLocalStorage(newNumber);
  }

  return { number, updateNumber };
}