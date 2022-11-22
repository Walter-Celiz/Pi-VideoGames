import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postVideoGame } from "../redux/actions";
import Navbar from "./Navbar";
import "../styles/post.css";

function validate(input) {
    let errors = {};
    if (!input.name) {
        (errors.name = "Name is required, please choose one!");
    } else if (input.name.length > 40) {
        (errors.name = "The video game name is too long!, please try with a shorter one");
    } else if (!/^[a-zA-Z]+$/.test(input.name)) {
        (errors.name = "Do not use special symbols!");
    } else if (!input.rating || input.rating > 5 || input.rating <= 1) {
        (errors.rating = "Rating must be a number between 1-5");
    } else if (!input.released) {
        (errors.released = "Released is required");
    } else if (!input.background_image) {
        (errors.background_image = "Paste the link from your video game image!");
    } else if (!input.background_image || input.background_image.length > 255) {
        errors.background_image = "The url of image is require and its length less than 255";
    } else if (!input.description) {
        (errors.description = "The description is requiere");
    } else if (!/^[a-zA-Z]+$/.test(input.description)) {
        errors.description = "Do not use special symbols!";
    } else if (!input.genres) {
        (errors.genres = "Pick a genre");
    } else if (!input.platforms) {
        (errors.platforms = "Pick a platform");
    }
    return errors;
}

export default function Post() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);

    const [input, setInput] = useState({
        name: "",
        released: "",
        background_image: "",
        rating: 0,
        description: "",
        genres: [],
        platforms: [],
    });

    const [errors, setErrors] = useState({}); // eslint-disable-line

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
        console.log(input);
    }

    function handleSelectGenre(e) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
        console.log(input);
    }
    function handleSelectPlatform(e) {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        });
        console.log(input);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(input);
        dispatch(postVideoGame(input));
        alert("Video Game Creado");
        setInput({
            name: "",
            released: "",
            background_image: "",
            rating: 0,
            description: "",
            genres: [],
            platforms: [],
        });
        history.push("/home");
    }

    function handleGenreDelete(gen) {
        setInput({
            ...input,
            genres: input.genres.filter((genre) => genre !== gen),
        });
    }

    function handlePlatformDelete(plat) {
        setInput({
            ...input,
            platforms: input.platforms.filter((platform) => platform !== plat),
        });
    }

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(postVideoGame());
    }, [dispatch]);

    return (
        <div className="postVideoGameContainer">
            <Navbar />
            <div className="postVideoGame">
                <form className="postVideoGame__form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mg">
                        <label className="order font">Name: </label>
                        <input
                            className="font__bold postVideoGame__input order2"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            autoFocus
                        />
                        {errors.name && <p className="validate">{errors.name}</p>}
                    </div>
                    <div className="mg">
                        <label className=" font">Released: </label>
                        <input
                            className="font__bold postVideoGame__input "
                            type="date"
                            name="released"
                            value={input.released}
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.released && <p className="validate">{errors.released}</p>}
                    </div>
                    <div className="mg">
                        <label className=" font">Background_image: </label>
                        <input
                            className="font__bold postVideoGame__input "
                            type="text"
                            name="background_image"
                            value={input.background_image}
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.background_image && <p className="validate">{errors.background_image}</p>}
                    </div>
                    <div className="mg">
                        <label className=" font">Rating: </label>
                        <input
                            className="font__bold postVideoGame__input "
                            type="number"
                            name="rating"
                            value={input.rating}
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.rating && <p className="validate">{errors.rating}</p>}
                    </div>
                    <div className="mg2">
                        <label className=" font">Description: </label>
                        <input
                            className="font__bold postVideoGame__input "
                            type="text"
                            name="description"
                            value={input.description}
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.description && <p className="validate">{errors.description}</p>}
                    </div>
                    <select className="font" onChange={(e) => handleSelectGenre(e)}>
                        <option className="font opt">Choose Genres: </option>
                        {genres.map((genre) => (
                            <option className="font" value={genre.id} key={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                    <div className="platforShowContainer">
                        {input.genres.map((genre) => (
                            <div className="platforShow">
                                {genre}&nbsp;
                                <button
                                    className="formCloseBtn"
                                    type="button"
                                    onClick={() => handleGenreDelete(genre)}
                                >
                                    X
                                </button>&nbsp;{"-"}&nbsp;
                            </div>
                        ))}
                        {errors.name && <p className="validate">{errors.name}</p>}
                    </div>
                    {errors.genre && <p className="validate">{errors.genre}</p>}

                    <select className="font" onChange={(e) => handleSelectPlatform(e)}>
                        <option className="font opt">Choose Platforms: </option>
                        {platforms.map((platform) => (
                            <option className="font " value={platform.id} key={platform.id}>
                                {platform.name}
                            </option>
                        ))}
                    </select>
                    <div className="platforShowContainer">
                        {input.platforms.map((platform) => (
                            <div className="platforShow">
                                {platform}&nbsp;
                                <button
                                    className="formCloseBtn"
                                    type="button"
                                    onClick={() => handlePlatformDelete(platform)}
                                >
                                    X
                                </button>&nbsp;{"-"}&nbsp;
                            </div>
                        ))}
                        {errors.name && <p className="validate">{errors.name}</p>}
                    </div>
                    {Object.keys(errors).length
                        ? <button type="submit" disabled={true} className="font postVideoGame__btn-disable">
                            Create
                        </button>
                        : <button type="submit" className="font postVideoGame__btn">
                            Create Video Game
                        </button>
                    }
                </form>
            </div>
        </div>
    );
}























/* 
<div className="formPlatforms">
          <label className="formLabelPlatforms">Platforms</label>
          <select
            className="formSelect"
            onChange={(e) => handlePlatformsSelect(e)}
          >
            <option>Select</option>
            {platforms.map((e) => (
              <option value={e.name}> {e.name} </option>
            ))}
          </select>
          {input.platforms.map((e) => (
            <div>
              <li className="formLi">
                {e}
                <button
                  className="formCloseBtn"
                  type="button"
                  onClick={() => handlePlatformDelete(e)}
                >
                  X
                </button>
              </li>
            </div>
          ))}
          {errors.platforms && (
            <p className="formDanger"> {errors.platforms} </p>
          )}
        </div>
*/

/* function handleCheckGenre(e) {
    if (e.target.checked) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
    }
    console.log(input);
};

function handleCheckPlatform(e) {
    if (e.target.checked) {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value],
        });
    }
    console.log(input);
}; */

// eslint-disable-next-line no-lone-blocks
{
    /* <label className="">Genres: </label>
                      <div className="">
                          {genres.map((genre) =>
                              <section key={genre.name}>
                                  <input
                                      className=""
                                      type="checkbox"
                                      name={genre.name}
                                      value={genre.name}
                                      onChange={(e) => handleCheckGenre(e)}
                                  />
                                  <label className="">{genre.name}</label>
                              </section>
                          )}
                      </div> 
  
  
   <label className="">Platforms: </label>
                      <div className="">
                          {platforms.map((platform) =>
                              <section key={platform.name}>
                                  <input
                                      className=""
                                      type="checkbox"
                                      name={platform.name}
                                      value={platform.name}
                                      key={platform.name}
                                      onChange={(e) => handleCheckPlatform(e)}
                                  />
                                  <label className="">{platform.name}</label>
                              </section>
                          )}
                      </div> */
}
