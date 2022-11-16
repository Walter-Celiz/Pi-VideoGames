// Nodes
import React from "react";
import { useSelector, useDispatch } from 'react-redux'

// Redux Actions
import {
    getVideoGames,
    filterByGenres,
    filterByCreated,
} from "../redux/actions"

// CSS 
import "../styles/filters.css";

export default function FiltersAndOrders() {

    // Redux Hooks 
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.allGenres);

    // Functions
    const handleReset = (e) => {
        e.preventDefault();
        dispatch(getVideoGames());
    }

    const handleFilterByGenres = (e) => {
        e.preventDefault();
        dispatch(filterByGenres(e.target.value))
        // setCurrentPage(1)
    };

    const handleFilterByCreated = (e) => {
        e.preventDefault();
        dispatch(filterByCreated(e.target.value))
    }

    return (
        <div className="filtersContainer">
            <div className="filters">

                {/* Reset Filters */}
                <button onClick={(e) => { handleReset(e) }}>
                    Reset
                </button>

                {/* Filter By Genres */}
                <select onChange={(e) => { handleFilterByGenres(e) }}>
                    <option value="All">All Genres</option>
                    {allGenres.map(genre => <option
                        key={genre.name}
                        value={genre.name}
                    >
                        {genre.name}
                    </option>)}
                </select>

                {/* Filter by Created */}
                <select onChange={(e) => { handleFilterByCreated(e) }}>
                    <option value="all">All</option>
                    <option value="api">Api</option>
                    <option value="created">Created</option>
                </select>

            </div>
        </div>
    );
}
