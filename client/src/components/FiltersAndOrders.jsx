// Nodes
import React from "react";
import { useSelector, useDispatch } from 'react-redux'

// Redux Actions
import {
    getVideoGames,
    filterByGenre,
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

    const handleFilterByGenre = (e) => {
        e.preventDefault();
        dispatch(filterByGenre(e.target.value))
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
                <select onChange={(e) => { handleFilterByGenre(e) }}>
                    <option value="all">All Genres</option>
                    {allGenres.map((genres) => {
                        return (
                            <option key={genres.id} value={genres.name}>
                                {genres.name}
                            </option>
                        );
                    })}
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
