import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // eslint-disable-line
import { getVideoGameName } from "../redux/actions";
import "../styles/searchBar.css";

export default function SearchBar({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    function handleInputChange(e) {
        e.preventDefault();
        setInput(e.target.value);
        setCurrentPage(1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.length) {
            alert("Search not Found");
        } else if (typeof input === "string") {
            dispatch(getVideoGameName(input));
            // } else if (typeof input === "number"){
            //     dispatch(getRating(input));
        } else {
            alert("Search not Found");
        }
        setCurrentPage(1);
        setInput("");
    }

    return (
        <div className="searchBarContainer">
            <div className="searchBar">
                <form>
                    <input
                        type="text"
                        placeholder="Search.."
                        className="searchBar__input"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="searchBar__input2"
                    >
                        🔎
                    </button>
                </form>
            </div>
        </div>
    );
}
