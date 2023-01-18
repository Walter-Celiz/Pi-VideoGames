import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getVideoGames,
  filterGenre,
  filterCreated,
  orderName,
  orderRating,
} from "../redux/actions";
import "../styles/filtersAndOrders.css";

export default function FiltersAndOrders({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  // Functions
  function handleReset(e) {
    e.preventDefault();
    dispatch(getVideoGames());
    setCurrentPage(1);
  }

  function handleFilterGenre(e) {
    e.preventDefault();
    dispatch(filterGenre(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleRating(e) {
    e.preventDefault();
    dispatch(orderRating(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div className="filters">
      <select
        className="filter__select"
        onChange={(e) => {
          handleFilterGenre(e);
        }}
      >
        <option value="all">All Genres</option>
        {genres.map((genres) => (
          <option key={genres.id} value={genres.name}>
            {genres.name}
          </option>
        ))}
      </select>
      <select
        className="filter__select2"
        onChange={(e) => {
          handleFilterCreated(e);
        }}
      >
        <option value="all">All Games</option>
        <option value="api">Api Games</option>
        <option value="created">Creations</option>
      </select>
      <select
        className="filter__select3"
        onChange={(e) => {
          handleSort(e);
        }}
      >
        <option value="ascAlph">A-Z</option>
        <option value="descAlph">Z-A</option>
      </select>
      <select
        className="filter__select4"
        onChange={(e) => {
          handleRating(e);
        }}
      >
        <option value="ascRat">High Rating</option>
        <option value="descRat">Low Rating</option>
      </select>
      <button
        className="filter__btn"
        onClick={(e) => {
          handleReset(e);
        }}
      >
        reset
      </button>
    </div>
  );
}
