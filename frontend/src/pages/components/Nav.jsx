import logo from "../../static/img/logo.png";

const Nav = () => {
  return (
    <nav className="d-flex align-items-center px-4">
      <a
        href={"/"}
        className="text-decoration-none text-white d-flex align-items-center"
      >
        <img src={logo} alt="confession" className="logo-img" />
        <p className="h3 fst-italic">Confession</p>
      </a>

      <div className="d-flex gap-3 ms-auto">
        <a href="/" className="fst-italic text-decoration-none text-white">
          add confession
        </a>
        <a href="/" className="fst-italic text-decoration-none text-white">
          user
        </a>
      </div>
    </nav>
  );
};

export default Nav;
