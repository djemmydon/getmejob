import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const useForm = (validateForm) => {
  const [values, setValues] = useState({
    password: "",
    name: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resData, setResData] = useState(false);
  const [data, setData] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleChange = (name) => (value) => {
    setValues({ ...values, [name]: value });
    setError(validateForm(values));
  };

  const handleSubmitRegister = async () => {
    // console.warn(values);
    setIsLoading(true);

    await axios
      .post("http://192.168.43.242:3001/api/v1/user/register", values)
      .then((res) => {
        try {
          console.warn(res.data);
          setIsLoading(false);
          setData(res.data);
          navigation.navigate("Login");
          setValues({
            password: "",
            name: "",
            phone: "",
            email: "",
          });
        } catch (error) {
          console.warn(error.message);
          setIsLoading(false);
        }
      });
  };
  const handleSubmitLogin = async () => {
    setIsLoading(true);

    console.warn({
      email: values.email,
      password: values.password,
    });

    await axios
      .post(
        "http://192.168.43.242:3001/api/v1/user/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        try {
          console.warn(res.data);
          setIsLoading(false);
          setData(res.data);
          setResData(true);

          const jsonValue = JSON.stringify(res.data);
          AsyncStorage.setItem("user", jsonValue);
          setValues({
            password: "",
            email: "",
          });
        } catch (error) {
          setIsLoading(false);

          console.warn(error.message);
        }
      });
  };
  return {
    values,
    handleChange,
    handleSubmitRegister,
    error,
    handleSubmitLogin,
    isLoading,
    resData,
  };
};

export default useForm;
