import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <p>BardisFan</p>
      </div>
      <nav className="nav">
        <Link to={"/"}>Home</Link>
      </nav>
    </header>
  );
}

export default Header;
