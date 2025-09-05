import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./static/css/style.css";

// components and pages
import Nav from "./pages/components/Nav";

function App() {
  const token = localStorage.getItem("token");

  const Index = React.lazy(() => import("./pages/Index"));
  const Profile = React.lazy(() => import("./pages/Profile"));

  // auth components
  const Signup = React.lazy(() => import("./pages/authPages/Signup"));
  const Login = React.lazy(() => import("./pages/authPages/Login"));
  const AddConfession = React.lazy(() => import("./pages/AddConfession"));
  const Confession = React.lazy(() => import("./pages/Confession"));

  return (
    <>
      <BrowserRouter>
        <Nav />
        <main className="px-4">
          <Suspense>
            <Routes>
              <Route
                path="/"
                element={token ? <Index /> : <Navigate to={"/user/login"} />}
              />
              <Route
                path="/:user/profile"
                element={token ? <Profile /> : <Navigate to={"/user/login"} />}
              />
              <Route
                path="/addConfession"
                element={
                  token ? <AddConfession /> : <Navigate to={"/user/login"} />
                }
              />
              <Route
                path="/:id/comments/"
                element={
                  token ? <Confession /> : <Navigate to={"/user/login"} />
                }
              />
              <Route
                path="/user/signup"
                element={token ? <Navigate to={"/"} /> : <Signup />}
              />
              <Route
                path="/user/login"
                element={token ? <Navigate to={"/"} /> : <Login />}
              />
              <Route
                path="*"
                element={
                  <h3 className="">The Provided URL is not available</h3>
                }
              />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
