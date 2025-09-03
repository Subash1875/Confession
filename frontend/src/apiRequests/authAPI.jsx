import axios from "axios";
import { useState } from "react";

export const authAPI = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const Signup = async (username, password1, password2) => {
    if (!username || !password1 || !password2) {
      setMessage("all fields are mandatory");
      return;
    }

    if (password1 !== password2) {
      setMessage("password fields are not same");
      return;
    }

    setMessage(null);
    setLoading(true);

    try {
      const response = await axios.post("/api/user/signup/", {
        username,
        password: password1,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.username);
      window.location.href = "/";
    } catch (error) {
      setMessage(error?.response?.data || "an error occured, please try again");
    } finally {
      setLoading(false);
    }
  };

  const Login = async (username, password) => {
    setMessage(null);
    setLoading(true);

    try {
      const response = await axios.post("/api/user/login/", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.username);
      window.location.href = "/";
    } catch (error) {
      setMessage(error?.response?.data || "an error occured, please try again");
    } finally {
      setLoading(false);
    }
  };

  return {
    message,
    loading,
    Signup,
    Login,
  };
};
