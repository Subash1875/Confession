const Index = () => {
  const data = [
    {
      user: "subash",
      content: "this is a test content to check the UI",
      createAt: "2 mins ago",
    },
    {
      user: "kevin",
      content: "this is a test content to check the UI",
      createAt: "2 mins ago",
    },
    {
      user: "ben",
      content: "this is a test content to check the UI",
      createAt: "2 mins ago",
    },
    {
      user: "gwen",
      content: "this is a test content to check the UI",
      createAt: "2 mins ago",
    },
  ];

  return (
    <>
      <div className="container-fluid py-5">
        <div className="row justify-content-evenly g-4">
          {data.map((d, k) => (
            <div className="col-10 col-lg-5 border border-1 rounded-3 d-flex flex-column px-5 py-4" key={k}>
              <a
                href={d.user}
                className="h4 fst-italic text-decoration-none py-3"
              >
                {d.user}
              </a>

              <div className="mt-auto">
                <div>
                  <div className="overflow-auto" style={{ maxHeight: "200px" }}>
                    <span
                      className="fst-italic"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {d.content}
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
                  <span
                    className="ms-auto fst-italic"
                    style={{ fontSize: "12px" }}
                  >
                    {d.createAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
