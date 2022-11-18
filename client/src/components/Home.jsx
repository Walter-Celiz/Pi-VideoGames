import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideoGames } from "../redux/actions";
import Navbar from "./Navbar";
import FiltersAndOrders from "./FiltersAndOrders";
import CardGroup from "./CardGroup";
import Paginated from "./Paginated";
import "../styles/home.css";

export default function Home() {
    const dispatch = useDispatch();
    const allVideoGames = useSelector((state) => state.allVideoGamesLoaded);

    //Paginated
    // const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [videoGamesPerPage, setVideoGamesPerPage] = useState(15);
    const indexOfLastVideoGame = currentPage * videoGamesPerPage;
    const indexOfFirstVideoGame = indexOfLastVideoGame - videoGamesPerPage;
    const currentVideoGames = allVideoGames.slice(
        indexOfFirstVideoGame,
        indexOfLastVideoGame
    );

    // Set click number
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className="homeContainer">
            <div className="home">
                <Navbar />
                <h2 className="home__h2">VIDEO&nbsp;&nbsp;&nbsp;&nbsp;GAMES</h2>
                <FiltersAndOrders
                    setCurrentPage={setCurrentPage}
                // setOrder={setOrder} 
                />
                <Paginated
                    videoGamesPerPage={videoGamesPerPage}
                    allVideoGames={allVideoGames.length}
                    paginated={paginated}
                    currentPage={currentPage}
                />
                <CardGroup currentVideoGames={currentVideoGames} />
            </div>
        </div>
    );
}
