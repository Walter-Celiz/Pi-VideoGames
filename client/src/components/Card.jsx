import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

export default function Card({ id, background_image, name, rating, genres }) {
  return (
    <div className="card">
      <div className="card__images">
        <Link to={`/videogames/${id}`}>
          <img src={background_image} alt={name} className="card__img" />
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__content__h3">{name}</h3>
        <p className="card__content__p">{rating}</p>
      </div>
      <div className="card__genres">
        <ul className="card__genres__ul">
          {genres.map((genre) => (
            <li className="card__genres__li" key={genre}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
