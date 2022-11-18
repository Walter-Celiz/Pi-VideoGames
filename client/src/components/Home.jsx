// Nodes 
import React, { useEffect, /* useState */ } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import {
    getGenres,
    getVideoGames,
} from "../redux/actions"

// Components 
import Navbar from "./Navbar";
import FiltersAndOrders from "./FiltersAndOrders";
import CardGroup from "./CardGroup";

// CSS 
import "../styles/home.css";


export default function Home() {
    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.allGenres);
    const allVideoGames = useSelector((state) => state.allVideoGamesLoaded);

    useEffect(() => {
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className="homeContainer">
            <div className="home">
                <Navbar />
                <h2 className="home__h2">VIDEO&nbsp;&nbsp;&nbsp;&nbsp;GAMES</h2>
                <FiltersAndOrders allGenres={allGenres} />
                <CardGroup allVideoGames={allVideoGames} />
            </div>
        </div>
    );
}

