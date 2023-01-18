import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // eslint-disable-line
import { getVideoGameName } from "../redux/actions";
import "../styles/searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    // setCurrentPage(1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.length) {
      alert("Please enter a videogame");
    } else {
      dispatch(getVideoGameName(input)); //input es lo q está escribiendo el usuario
      // setCurrentPage(1);
      setInput("");
    }
  }

  return (
    <form className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search.."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="searchBar__btn"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        🔎
      </button>
    </form>
  );
}

// function handleInputChange(e) {
//     e.preventDefault();
//     setInput(e.target.value);
//     setCurrentPage(1);
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     if (!input.length) {
//         alert("Search not Found");
//     } else if (typeof input === "string") {
//         dispatch(getVideoGameName(input));
//         // } else if (typeof input === "number"){
//         //     dispatch(getRating(input));
//     } else {
//         alert("Search not Found");
//     }
//     setCurrentPage(1);
//     setInput("");
// }
