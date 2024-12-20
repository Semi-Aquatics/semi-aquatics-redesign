import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cms from '../cms';

// Define the structure of the drop data
interface DropData {
  _id: string;
  title: string;
  dateTime: string;
  password: string;
  __v: number;
}

// Define the context value structure
interface DropContextType {
  dropData: DropData | null;
  loading: boolean;
  error: string | null;
}

// Create the context with default values
const DropContext = createContext<DropContextType>({
  dropData: null,
  loading: true,
  error: null,
});

// Custom hook to access DropContext
export const useDrop = () => useContext(DropContext);

// Create the DropContext provider component
export const DropProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dropData, setDropData] = useState<DropData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Base URI based on environment
  const baseUri = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://semi-aquatics-cms.onrender.com';

  // Fetch the drop data from the API
  useEffect(() => {
    const fetchDrop = async () => {
      try {
        const response = await new Cms().getNextDrop();
        setDropData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch drop data');
        setLoading(false);
      }
    };

    fetchDrop();
  }, [baseUri]);

  return (
    <DropContext.Provider value={{ dropData, loading, error }}>
      {children}
    </DropContext.Provider>
  );
};
