import React from "react";
import Card from "./Card";
import "../styles/cardsGroup.css";

export default function CardsGroup({ currentVideoGames }) {
  return (
    <div className="cardsGroup">
      {currentVideoGames?.map((videoGame, i) => (
        <div className="cardsContainer" key={i}>
          <Card
            id={videoGame.id}
            background_image={videoGame.background_image}
            name={videoGame.name}
            rating={videoGame.rating}
            genres={videoGame.genres}
          />
        </div>
      ))}
    </div>
  );
}
