import { useState } from "react";
import Loading from "../components/Loading";
import { authAPI } from "../../apiRequests/authAPI";

const Login = () => {
  const { Login, loading, message } = authAPI();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-lg-5 d-flex flex-column gap-5 shadow rounded-4 px-5 py-4">
            <div className="text-center">
              <p className="h2 fst-italic">Login</p>
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

            <div className="d-flex flex-column gap-3">
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="d-flex flex-column">
              <button
                className="btn btn-dark fst-italic"
                onClick={() => Login(username, password)}
              >
                Login
              </button>
              <hr />
              <p className="h6 text-center">
                new to confession ?{" "}
                <a className="fst-italic text-decoration-none" href="/user/signup/">
                  Signup
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

export default Login;
