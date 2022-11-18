// Nodes
import React from "react";

//Components
import Card from "./Card";

//CSS
import "../styles/cardGroup.css";

export default function CardGroup({ currentVideoGames, allVideoGames }) {
    return (
        <div className="cardGroupContainer">
            {/* <div className="CardGroup">
                {currentVideoGames && typeof currentVideoGames === 'object'
                    ? currentVideoGames.map(videoGame => <Card
                        name={videoGame.name}
                        background_image={videoGame.background_image}
                        genres={videoGame.genres}
                        id={videoGame.id}
                    />)
                    : <span>No video games found 🥱</span>
                }
            </div> */}
            <div className="cardGroup">
                <div>
                    {allVideoGames?.map(videoGame => <Card
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
