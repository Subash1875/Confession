import { useState } from "react";
import ConfessionAPI from "../apiRequests/ConfessionAPI";
import Loading from "./components/Loading";

const AddConfession = () => {
  const { message, loading, addConfession } = ConfessionAPI();
  const [content, setContent] = useState("");

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-lg-7 d-flex flex-column shadow rounded-4 px-5 py-4 gap-4">
            <div>
              <p className="h4 fst-italic">add your confessions here...</p>
              <p className="h5 text-danger fst-italic">{message}</p>
            </div>

            <div>
              <div className="form-floating">
                <textarea
                  type="text"
                  className="form-control"
                  id="content"
                  placeholder=""
                  style={{ minHeight: "250px" }}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label htmlFor="content">write whatever you want...</label>
              </div>
            </div>

            <div>
              <button
                className="btn btn-dark px-4"
                onClick={() => addConfession(content)}
              >
                add confession
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default AddConfession;
