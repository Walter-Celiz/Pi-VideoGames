import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__div">
        <Link className="navbar__link" to="/home">
          HOME
        </Link>
      </div>
      <div className="navbar__div2">
        <Link className="navbar__link2" to="/videogames/create">
          CREATE
        </Link>
      </div>
    </nav>
  );
}
