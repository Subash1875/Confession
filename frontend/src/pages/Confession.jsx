import { useEffect, useState } from "react";
import { CommentAPI } from "../apiRequests/CommentAPI";
import Loading from "./components/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";

const Confession = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const { message, loading, getComments, comments, postComment } = CommentAPI();
  const [comment, setComment] = useState("");
  const [confession, setConfession] = useState();

  useEffect(() => {
    getComments(id);
  }, []);

  const getConfession = async () => {
    try {
      const response = await axios.get(`/api/confessions/${id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      setConfession(response.data);
    } catch (error) {
      alert(
        error?.response?.data?.detail || "an error occured, please try again"
      );
    }
  };

  useEffect(() => {
    getConfession();
  }, []);

  const confessionDOM = () => {
    return (
      <>
        <div className="col-10 col-lg-5 border border-1 rounded-3 d-flex flex-column px-5 py-4">
          <a href="" className="h4 fst-italic text-decoration-none py-3">
            {confession.user}
          </a>

          <div className="mt-auto">
            <div>
              <div className="overflow-auto" style={{ maxHeight: "200px" }}>
                <span className="fst-italic" style={{ whiteSpace: "pre-wrap" }}>
                  {confession.content}
                </span>
              </div>
              <hr />
            </div>

            <div className="d-flex align-items-center mt-4">
              <div className="d-flex gap-4">
                <a href="">
                  <i
                    className="bi bi-balloon-heart-fill"
                    style={{ fontSize: "1.5rem", color: "red" }}
                  ></i>
                </a>

                <a href="/">
                  <i
                    className="bi bi-chat-left-heart"
                    style={{ fontSize: "1.5rem", color: "#000" }}
                  ></i>
                </a>
              </div>
              <span className="ms-auto fst-italic" style={{ fontSize: "12px" }}>
                {confession.created_at.slice(1, 11)}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const CommentDOM = () => {
    return comments.map((comment, index) => {
      return (
        <div className="d-flex gap-3" key={index}>
          <a
            href={`/${comment.user}/profile`}
            className="fst-italic text-decoration-none fw-bold text-dark"
          >
            {comment.user} :
          </a>
          <span className="fst-italic">{comment.comment}</span>
          <hr />
        </div>
      );
    });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center gap-4">
          <strong className="fst-italic text-danger">{message}</strong>

          {confession && confessionDOM()}

          {/* comments */}
          <div className="col-10 col-lg-5 border rounded-3 px-5 py-4 d-flex flex-column justify-content-evenly gap-4">
            <p className="h4 fst-italic">Comments</p>

            <div
              style={{ maxHeight: "200px", overflow: "auto" }}
              className="p-3 rounded-2 border border-1"
            >
              {CommentDOM()}
            </div>

            <div className="d-flex flex-column gap-3">
              <input
                type="text"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="write here..."
              />

              <button
                className="btn btn-dark"
                onClick={() => {
                  postComment(id, comment), setComment("");
                }}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default Confession;
