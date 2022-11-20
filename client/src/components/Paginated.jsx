import React from "react";
import "../styles/paginated.css";

export default function Paginated({
    videoGamesPerPage,
    videoGames,
    paginated,
    currentPage,
    handlePrev,
    handleNext,
}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(videoGames / videoGamesPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="paginatedContainer">
            <div className="paginated">
                <button className="prev" onClick={() => handlePrev()}>
                    {"<"}
                </button>
                {pageNumber?.map((number) => {
                    if (number === currentPage) {
                        return (
                            <button
                                className="number"
                                key={number}
                                onClick={() => paginated(number)}
                            >
                                {number}
                            </button>
                        );
                    } else {
                        return (
                            <button
                                className="number"
                                key={number}
                                onClick={() => paginated(number)}
                            >
                                {number}
                            </button>
                        );
                    }
                })}
                <button className="next" onClick={() => handleNext()}>
                    {">"}
                </button>
            </div>
        </div>
    );
}
