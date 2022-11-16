// Nodes 
import React, { useEffect, /* useState */ } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import {
    getVideoGames,
} from "../redux/actions"

// Components 
import Navbar from "./Navbar";
// import FiltersAndOrders from "./FiltersAndOrders";
import CardGroup from "./CardGroup";

// CSS 
import "../styles/home.css";


export default function Home() {
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.allVideoGames);

    useEffect(() => {
        dispatch(getVideoGames());
    }, [dispatch]);

    return (
        <div className="homeContainer">
            <Navbar />
            <div className="home">
                <h2 className="home__h2">VIDEO GAMES</h2>
            </div>
            <div>
                <CardGroup allVideoGames={allVideoGames} />
            </div>
        </div>
    );
}

/* minuto 58 */