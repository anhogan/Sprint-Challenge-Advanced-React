import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setResponse(response.data);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
      });
  }, []);

  return { response, error };
};

export default useFetch;