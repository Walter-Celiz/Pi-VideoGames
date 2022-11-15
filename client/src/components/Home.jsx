import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoGames } from "../redux/actions";

import Navbar from "./Navbar";

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
            <Navbar />
            <div className="home">
                <h2 className="home__h2">Video Games</h2>
                <button onClick={e => { handleClick(e) }}>
                    Volver a cargar
                </button>
            </div>
        </div>
    );
}
