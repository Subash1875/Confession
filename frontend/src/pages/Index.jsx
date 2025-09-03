import { useEffect } from "react";
import ConfessionAPI from "../apiRequests/ConfessionAPI";
import Loading from "./components/Loading";

const Index = () => {
  const { loading, message, confessions, getConfessions } = ConfessionAPI();

  useEffect(() => {
    getConfessions();
  }, []);

  const confessionDOM = () => {
    return confessions.map((confession, index) => {
      return (
        <div
          className="col-11 col-lg-5 p-4 shadow rounded-3 d-flex flex-column"
          key={index}
        >
          <a
            href={`${confession.user}`}
            className="fst-italic h4 text-decoration-none"
          >
            {confession.user}
          </a>

          <div className="pt-5">
            <p className="fst-italic" style={{ whiteSpace: "pre-wrap" }}>
              {confession.content}
            </p>
            <hr />
          </div>

          <div className="d-flex align-items-center mt-4">
            <div className="d-flex gap-4">
              {/* <a href="">
                <i
                  className="bi bi-balloon-heart"
                  style={{ fontSize: "1.5rem", color: "#000" }}
                ></i>
              </a> */}

              <span>
                <i
                  className="bi bi-balloon-heart-fill"
                  style={{ fontSize: "1.5rem", color: "red" }}
                ></i>
              </span>

              <a href="">
                <i
                  className="bi bi-chat-left-heart"
                  style={{ fontSize: "1.5rem", color: "#000" }}
                ></i>
              </a>
            </div>
            <span className="ms-auto fst-italic" style={{ fontSize: "12px" }}>
              {confession.created_at.slice(0, 10)}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <p className="h4 fst-italic text-danger">{message}</p>

      <div className="container-fluid py-5">
        <div className="row d-flex justify-content-evenly gap-5">
          {confessions.length > 0 ? (
            confessionDOM()
          ) : (
            <p className="fst-italic h4">no confession to show</p>
          )}
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default Index;
