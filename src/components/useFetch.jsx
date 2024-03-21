import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await axios.get(url, { ...options });
      setData(response.data);
      setErrorMsg(null);
    } catch (error) {
      setErrorMsg(error.message || "Accured an error!");
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, errorMsg };
}
