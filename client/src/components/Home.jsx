import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../redux/actions";
// import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Home() {
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.videoGames);

    useEffect(() => {
        dispatch(getVideoGames());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideoGames());
    }

    return (
        <div className="homeContainer">
            <div className="home">
                <h className="home__h2">Video Games</h>
                <button onClick={e => { handleClick(e) }}>
                    Volver a cargar
                </button>
            </div>
        </div>
    );
}
