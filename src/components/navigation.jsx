import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navTabs">
      <li className="navItem">
        <Link
          to="/"
          className={currentPage === "/" ? "navLink active" : "navLink"}
        >
          About Me
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "navLink active" : "navLink"}
        >
          Contact
        </Link>
      </li>
      <li className="navItem">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "navLink active" : "navLink"}
        >
          Portfolio
        </Link>{" "}
      </li>
      <li className="navItem">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "navLink active" : "navLink"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}
