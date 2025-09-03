import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./static/css/style.css";

// components and pages
import Nav from "./pages/components/Nav";

function App() {
  const Index = React.lazy(() => import("./pages/Index"));
  const Profile = React.lazy(() => import("./pages/Profile"));

  return (
    <>
      <BrowserRouter>
        <Nav />
        <main className="px-4">
          <Suspense>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/:user/profile" element={<Profile />} />
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
