import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDetails from "../redux/actions";
import clearState from "../redux/actions";
import Navbar from "./Navbar";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";
import "../styles/details.css";

export default function Details(props) {
  // console.log(props);
  const dispatch = useDispatch();
  const videoGameDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
    dispatch(clearState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="mainDetailContainer">
      <ScrollToTop />
      <div className="navdetail">
        <Navbar />
      </div>
      {!videoGameDetail ? (
        <div className="mainDetailContainer2">
          <Loading />
        </div>
      ) : (
        <div className="detailContainer">
          <h2 className="detailContainer__h2">{videoGameDetail.name}</h2>
          <section className="detailContainer__content">
            <div className="content">
              <p className="content__p">{videoGameDetail.description}</p>
              <h4 className="content__h4">
                Released: {videoGameDetail.released}&nbsp;&nbsp; Rating:
                {videoGameDetail.rating}
              </h4>
            </div>
            <div className="content__images">
              <img
                className="content__imgs"
                src={videoGameDetail.background_image}
                alt={videoGameDetail.name}
              />
            </div>
          </section>

          <section className="section__genresPlatform">
            <h3 className="genresPlatform__h3">Genres</h3>
            <p className="genresPlatform__p">
              {videoGameDetail.genres?.map((g) => g.name).join(", ")}
            </p>
            <h3 className="genresPlatform__h3">Platforms</h3>
            <p className="genresPlatform__p">
              {videoGameDetail.platforms?.map((p) => p.name).join(", ")}
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
