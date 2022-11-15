import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbar">
                <div className="navbar__div">
                    <Link className="navbar__link" to="/home">
                        HOME
                    </Link>
                </div>
                <div className="navbar__div">
                    <Link className="navbar__link" to="/videogames/create">
                        CREATE
                    </Link>
                </div>
            </div>
        </div>
    );
}
