import "./component.css";
import { Link } from "react-router-dom";

function Header({ path, pathName }) {
  return (
    <footer className="header-section">
      <nav className=" head-nav-bar">
        <img
          className="header-icon"
          src="favicon.ico"
          alt="Sketch of the hair dryer machine."
        />
        <Link to={path}>{pathName}</Link>
      </nav>
    </footer>
  );
}

export default Header;
