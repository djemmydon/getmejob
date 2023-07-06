import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState({});

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      const jsonValue = value != null ? JSON.parse(value) : null;
      setUsers(jsonValue);
    } catch (e) {
      // error reading value
    }
  };

  const options = {
    method: "GET",
    url: `http://192.168.43.242:3001/api/v1/${endpoint}`,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, error, isLoading, refetch, users };
};
