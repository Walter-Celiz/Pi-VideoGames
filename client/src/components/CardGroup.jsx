import React from "react";
import Card from "./Card";
import "../styles/cardGroup.css";

export default function CardGroup({ currentVideoGames }) {
    return (
        <div className="cardGroupContainer">
            <div className="cardGroup">
                <div>
                    {currentVideoGames?.map(videoGame => <Card
                        name={videoGame.name}
                        background_image={videoGame.background_image}
                        genres={videoGame.genres}
                        id={videoGame.id}
                        key={videoGame.id}
                    />)}
                </div>
            </div>
        </div>
    );
}
