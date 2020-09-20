// useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";
import { Toast } from "../components";

// custom hook for performing GET request
const useFetch = ({ url, shouldExecute, initialValue }) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchData = async function () {
    try {
      setLoading(true);
      // call api and set data with response
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
        setHasError(false);
      }
    } catch (error) {
      setData([]);
      setHasError(true);
      // If error show toast
      Toast.notify(`Si è verificato un errore: ${error.message}`, "error");
      throw error;
    } finally {
      setLoading(false);
      setHasError(false);
      setData([]);
    }
  };

  useEffect(() => {
    if (shouldExecute) {
      setHasError(false);
      fetchData();
    } else {
      setLoading(false);
    }
  }, [url, shouldExecute]);

  return { loading, data, hasError };
};

export default useFetch;
