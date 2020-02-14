import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setResponse(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  }, []);

  return { response, error, isLoading };
};

export default useFetch;