import React from "react";
import loading from "../utils/img/loading.gif";
import "../styles/loading.css";

export default function Landing() {
  return (
    <div className="loadingContainer">
      <div className="loading">
        <img src={loading} alt="Loading..." />
      </div>
    </div>
  );
}
