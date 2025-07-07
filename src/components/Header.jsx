import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav>
        <img
          src="/src/components/images/logo.png"
          alt="Logo do Site"
          className="logo"
        />
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={isActive("/") || isActive("/index") ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/perfil/1"
              className={
                location.pathname.startsWith("/perfil") ? "active" : ""
              }
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/login" className={isActive("/login") ? "active" : ""}>
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/suporte"
              className={isActive("/suporte") ? "active" : ""}
            >
              Suporte
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
