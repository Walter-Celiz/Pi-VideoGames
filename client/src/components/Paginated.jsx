import React from "react";
import "../styles/paginated.css";

export default function Paginated({
    videoGamesPerPage,
    allVideoGames,
    paginated,
    currentPage,
}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(allVideoGames / videoGamesPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="paginatedContainer">
            <div className="paginated">
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
            </div>
        </div>
    );
}
