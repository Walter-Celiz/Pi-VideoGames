import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms, postVideoGame } from "../redux/actions";
import Navbar from "./Navbar";
import "../styles/post.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required, please choose one!";
  } else if (input.name.length > 40) {
    errors.name =
      "The video game name is too long!, please try with a shorter one";
  } else if (!input.rating || input.rating > 5 || input.rating <= 1) {
    errors.rating = "Rating must be a number between 1-5";
  } else if (!input.released) {
    errors.released = "Released is required";
  } else if (!input.background_image) {
    errors.background_image = "Paste the link from your video game image!";
  } else if (!input.background_image || input.background_image.length > 255) {
    errors.background_image =
      "The url of image is require and its length less than 255";
  } else if (!input.description) {
    errors.description = "The description is requiere";
  } else if (!input.genres) {
    errors.genres = "Pick a genre";
  } else if (!input.platforms) {
    errors.platforms = "Pick a platform";
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
    // console.log(input);
  }

  function handleSelectGenre(e) {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
    // console.log(input);
  }

  function handleSelectPlatform(e) {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
    // console.log(input);
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
    <div className="postContainer">
      <div className="navPost">
        <Navbar />
      </div>
      <form className="post__form" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="post__fieldset">
          <label className="post__label font">Name: </label>
          <input
            className="post__input post__input-1"
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
            autoFocus
          />
          {errors.name && <p className="validate">{errors.name}</p>}
        </fieldset>
        <fieldset className="post__fieldset">
          <label className="post__label font">Released: </label>
          <input
            className="post__input post__input-2"
            type="date"
            name="released"
            value={input.released}
            onChange={(e) => handleChange(e)}
          />
          {errors.released && <p className="validate">{errors.released}</p>}
        </fieldset>
        <fieldset className="post__fieldset ">
          <label className="post__label font">Image: </label>
          <input
            className="post__input post__input-3"
            type="text"
            name="background_image"
            value={input.background_image}
            onChange={(e) => handleChange(e)}
          />
          {errors.background_image && (
            <p className="validate">{errors.background_image}</p>
          )}
        </fieldset>
        <fieldset className="post__fieldset">
          <label className="post__label font">Rating: </label>
          <input
            className="post__input post__input-4"
            type="number"
            name="rating"
            value={input.rating}
            onChange={(e) => handleChange(e)}
          />
          {errors.rating && <p className="validate">{errors.rating}</p>}
        </fieldset>
        <fieldset className="post__fieldset2">
          <label className="post__label font">Description: </label>
          <input
            className="post__input post__input-5"
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
          {errors.description && (
            <p className="validate">{errors.description}</p>
          )}
        </fieldset>
        <select className="font" onChange={(e) => handleSelectGenre(e)}>
          <option className="font opt">Choose Genres: </option>
          {genres.map((genre) => (
            <option className="font" value={genre.name} key={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        <div className="platforShowContainer">
          {input.genres.map((genre) => (
            <div className="platforShow" key={genre}>
              {genre}&nbsp;
              <button
                className="formCloseBtn"
                type="button"
                onClick={() => handleGenreDelete(genre)}
              >
                X
              </button>
              &nbsp;{""}&nbsp;
            </div>
          ))}
          {errors.name && <p className="validate">{errors.name}</p>}
        </div>
        {errors.genre && <p className="validate">{errors.genre}</p>}

        <select className="font" onChange={(e) => handleSelectPlatform(e)}>
          <option className="font opt">Choose Platforms: </option>
          {platforms.map((platform) => (
            <option className="font " value={platform.name} key={platform.id}>
              {platform.name}
            </option>
          ))}
        </select>
        <div className="platforShowContainer">
          {input.platforms.map((platform) => (
            <div className="platforShow" key={platform}>
              {platform}&nbsp;
              <button
                className="formCloseBtn"
                type="button"
                onClick={() => handlePlatformDelete(platform)}
              >
                X
              </button>
              &nbsp;{""}&nbsp;
            </div>
          ))}
          {errors.name && <p className="validate">{errors.name}</p>}
        </div>
        {Object.keys(errors).length ? (
          <button
            type="submit"
            disabled={true}
            className="font postVideoGame__btn-disable"
          >
            Create
          </button>
        ) : (
          <button type="submit" className="font postVideoGame__btn">
            Create Video Game
          </button>
        )}
      </form>
    </div>
  );
}
