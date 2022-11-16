// Nodes
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../styles/card.css";

export default function Card({ id, name, background_image, genres }) {
    // if (typeof genres[0] === 'object') {
    //     genres = genres.map(el => el.name)
    // }

    return (
        <div className="cardContainer">
            <div className="card">
                <div>
                    <Link to={`/videogames/${id}`}>
                        <img src={background_image} alt={name} className="card__img" />
                    </Link>
                </div>
                <div>
                    <h3 className="card__h3">{name}</h3>
                </div>
                <div className="card__div__ul">
                    <ul className="card__ul">
                        {genres.map(genre => <li className="card__li" key={genre}>{genre}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
