import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getGenres, getPlatforms, postVideoGame } from "../redux/actions"
import "../styles/createVideoGame.css";

export default function CreateVideoGame() {
    const dispatch = useDispatch();
    const history = useHistory();
    const allgenres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);

    const [input, setInput] = useState({
        name: "",
        released: "",
        background_image: "",
        rating: 0,
        platforms: [],
        description: "",
        genres: [],
    })

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, [dispatch]);

    return (
        <div className="createVideoGameContainer">
            <div className="createVideoGame">

            </div>
        </div>
    );
}
