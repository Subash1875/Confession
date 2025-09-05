import { use, useEffect } from "react";
import ConfessionAPI from "../apiRequests/ConfessionAPI";
import { useParams } from "react-router-dom";
import Loading from "./components/Loading";

const Profile = () => {
  const { confessions, loading, message, getUserConfession } = ConfessionAPI();
  const { user } = useParams();
  const authUser = localStorage.getItem("user");

  useEffect(() => {
    getUserConfession(user);
  }, []);

  const logoutFunction = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const confessionDOM = () => {
    return confessions.map((confession, index) => {
      return (
        <div
          className="col-11 col-lg-5 p-4 shadow rounded-3 d-flex flex-column"
          key={index}
        >
          <a href={`/${confession.id}/comments`} className="fst-italic h4 text-decoration-none">{confession.user}</a>

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
      <div className="container-fluid">
        <div>
          <div className="d-flex pt-4">
            <div>
              <h2 className="fst-italic">{user}</h2>
            </div>

            {user === authUser && (
              <div
                className="ms-auto px-3 btn btn-danger"
                onClick={() => logoutFunction()}
              >
                <i
                  className="bi bi-box-arrow-left pe-2"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <span className="h5">logout</span>
              </div>
            )}
          </div>
          <hr />
        </div>

        <div className="row d-flex justify-content-evenly gap-5 py-4">
          <p className="fst-italic h4 text-danger">{message}</p>
          {confessions.length > 0 ? (
            confessionDOM()
          ) : (
            <h3 className="fst-italic">no confessions to show</h3>
          )}
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default Profile;
