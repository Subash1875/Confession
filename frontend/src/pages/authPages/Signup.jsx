import { useState } from "react";
import { authAPI } from "../../apiRequests/authAPI";
import Loading from "../components/Loading";

const Signup = () => {
  const { loading, message, Signup } = authAPI();

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-lg-5 d-flex flex-column shadow rounded-4 px-5 py-4 gap-5">
            <div className="d-flex flex-column align-items-center">
              <p className="h2 fst-italic">Signup</p>

              {message?.username && (
                <strong className="fst-italic text-danger">
                  {message.username[0]}
                </strong>
              )}
              {message?.password && (
                <strong className="fst-italic text-danger">
                  {message.password[0]}
                </strong>
              )}
            </div>

            <div className="d-flex flex-column gap-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password1"
                  placeholder="password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <label htmlFor="password1">Repeat Password</label>
              </div>
            </div>

            <div className="d-flex flex-column">
              <button
                className="btn btn-dark fst-italic"
                onClick={() => Signup(username, password1, password2)}
              >
                signup
              </button>
              <hr />
              <p className="h6 text-center">
                already have an account ?{" "}
                <a
                  href="/user/login"
                  className="text-decoration-none fst-italic"
                >
                  login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {loading && <Loading />}
    </>
  );
};

export default Signup;
