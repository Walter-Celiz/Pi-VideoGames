import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getVideoGames } from "../redux/actions";
import Navbar from "./Navbar";
import Loading from "./Loading";
import FiltersAndOrders from "./FiltersAndOrders";
import CardsGroup from "./CardsGroup";
import Paginated from "./Paginated";
import SearchBar from "./Searchbar";
import ScrollToTop from "./ScrollToTop";
import "../styles/home.css";

export default function Home() {
    const dispatch = useDispatch();
    const videoGames = useSelector((state) => state.videoGamesLoaded);

    const [order, setOrder] = useState('') // eslint-disable-line
    const [currentPage, setCurrentPage] = useState(1);
    const [videoGamesPerPage, setVideoGamesPerPage] = useState(15); // eslint-disable-line
    const indexOfLastVideoGame = currentPage * videoGamesPerPage;
    const indexOfFirstVideoGame = indexOfLastVideoGame - videoGamesPerPage;
    const currentVideoGames = videoGames.slice(
        indexOfFirstVideoGame,
        indexOfLastVideoGame
    );

    function paginated(pageNumber) {
        setCurrentPage(pageNumber);
    }

    function handleNext() {
        let lastpage = Math.ceil(videoGames.length / videoGamesPerPage);
        if (currentPage < lastpage) setCurrentPage(currentPage + 1);
    };

    function handlePrev() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        dispatch(getVideoGames());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className="homeContainer">
            <div className="home">
                <ScrollToTop />
                <Navbar />
                <h2 className="home__h2">VIDEO&nbsp;&nbsp;&nbsp;&nbsp;GAMES</h2>
                <div className="home">
                    <SearchBar
                    // currentPage={currentPage}
                    // setCurrentPage={setCurrentPage}
                    />
                    <FiltersAndOrders
                        setCurrentPage={setCurrentPage}
                        setOrder={setOrder}
                    />
                    {
                        (!currentVideoGames.length)
                            ? <Loading />
                            : <div>
                                <Paginated
                                    videoGamesPerPage={videoGamesPerPage}
                                    videoGames={videoGames.length}
                                    paginated={paginated}
                                    currentPage={currentPage}
                                    handleNext={handleNext}
                                    handlePrev={handlePrev}
                                />
                                <CardsGroup currentVideoGames={currentVideoGames} />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}
