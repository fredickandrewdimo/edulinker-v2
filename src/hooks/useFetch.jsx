import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  // Data
  const [data, setData] = useState(null);
  // Loading
  const [isLoading, setIsLoading] = useState(false);
  // Error
  const [error, setError] = useState(null);

  // Fetch data if the page in mounted
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, isLoading, error];
};
