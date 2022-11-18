import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
    return (
        <div className="landingContainer">
            <div className="landing">
                <h2 className="landing__h2">Project <br /> Video Games</h2>
                <Link className="landing__link" to="/home">
                    <button className="landing__button">START!</button>
                </Link>
            </div>
        </div>
    );
}
