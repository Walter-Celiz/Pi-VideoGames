import React from "react";
import Card from "./Card";
import "../styles/cardsGroup.css";

export default function CardsGroup({ currentVideoGames }) {
    return (
        <div className="cardsGroupContainer">
            <div className="cardsGroup">
                <div>
                    {currentVideoGames?.map(videoGame => <Card
                        key={videoGame.id}
                        id={videoGame.id}
                        background_image={videoGame.background_image}
                        name={videoGame.name}
                        rating={videoGame.rating}
                        genres={videoGame.genres}
                    />)}
                </div>
            </div>
        </div>
    );
}
