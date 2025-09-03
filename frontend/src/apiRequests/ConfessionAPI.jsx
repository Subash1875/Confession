import { useState } from "react";
import axios from "axios";

import Cookie from "js-cookie";

const ConfessionAPI = () => {
  const token = "8a4c80747f4b954f3f6eced53b02de04329b40e2";
  const csrf_token = Cookie.get("csrftoken");

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confessions, setConfessions] = useState([]);

  const getConfessions = async () => {
    setMessage(null);
    setLoading(true);

    try {
      const response = await axios.get("/api/confessions/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setConfessions(response.data);
    } catch (error) {
      setMessage(
        error?.response?.data?.detail || "an error occured, please try again"
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserConfession = async (user) => {
    setMessage(null);
    setLoading(true);

    try {
      const repsonse = await axios.get(`/api/confessions/${user}`, {
        headers: { Authorization: `Token ${token}` },
      });
      setConfessions(repsonse.data);
    } catch (error) {
      setMessage(
        error?.response?.data?.detail || "an error occred, please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return { message, loading, confessions, getConfessions, getUserConfession };
};

export default ConfessionAPI;
