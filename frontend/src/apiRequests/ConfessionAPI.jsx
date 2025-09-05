import { useState } from "react";
import axios from "axios";

const ConfessionAPI = () => {
  const token = localStorage.getItem("token");

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

  const addConfession = async (content) => {
    setMessage(null);
    setLoading(true);

    try {
      await axios.post(
        "/api/confessions/",
        { content },
        { headers: { Authorization: `Token ${token}` } }
      );
      window.location.href = "/";
    } catch (error) {
      setMessage(
        error?.response?.data?.detail || "an error occured, please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    message,
    loading,
    confessions,
    getConfessions,
    getUserConfession,
    addConfession,
  };
};

export default ConfessionAPI;
