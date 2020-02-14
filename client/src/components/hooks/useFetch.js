import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return { response, error };
};

export default useFetch;