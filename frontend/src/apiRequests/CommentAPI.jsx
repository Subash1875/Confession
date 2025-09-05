import axios from "axios";
import { useState } from "react";

export const CommentAPI = () => {
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [comments, setComments] = useState([]);

  const getComments = async (id) => {
    setMessage(null);
    setLoading(true);

    try {
      const response = await axios.get(`/api/${id}/comments/`, {
        headers: { Authorization: `Token ${token}` },
      });
      setComments(response.data);
    } catch (error) {
      setMessage(
        error?.response?.data?.detail || "an error occured, please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  const postComment = async (id, comment) => {
    setMessage(null);
    setLoading(true);

    try {
      await axios.post(
        `/api/${id}/comments/`,
        { comment },
        { headers: { Authorization: `Token ${token}` } }
      );
      window.location.href = "";
    } catch (error) {
      setMessage(
        error?.response?.data?.detail || "an error occured, please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    message,
    comments,
    getComments,
    postComment,
  };
};
