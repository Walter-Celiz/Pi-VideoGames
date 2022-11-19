import React from "react";
import Card from "./Card";
import "../styles/cardGroup.css";

export default function CardGroup({ currentVideoGames }) {
    return (
        <div className="cardGroupContainer">
            <div className="cardGroup">
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
