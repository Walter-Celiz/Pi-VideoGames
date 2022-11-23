import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDetails from "../redux/actions";
import Navbar from "./Navbar";
import Loading from "./Loading";
import ScrollToTop from "./ScrollToTop";
import "../styles/details.css";

export default function Details(props) {
    console.log(props);
    const dispatch = useDispatch();
    const videoGameDetail = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getDetails(props.match.params.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <div className="mainContainer">
            <ScrollToTop />
            <Navbar />
            {!videoGameDetail ? (
                <div className="mainContainer2">
                    <Loading />
                </div>
            ) : (
                <div className="detailContainer">
                    <h2 className="detail_h2">{videoGameDetail.name}</h2>
                    <div className="detail">
                        <section className="detail_section">
                            <div className="detail_section-div">
                                <p className="detail_content_p">{videoGameDetail.description}</p>
                                <h4 className="detail_section-h4">
                                    Released: {videoGameDetail.released}&nbsp;&nbsp;
                                    Rating:{" "}{videoGameDetail.rating}
                                </h4>
                            </div>
                            <div className="detail_section-div2">
                                <img
                                    className="detail_section-img"
                                    src={videoGameDetail.background_image}
                                    alt={videoGameDetail.name}
                                />
                            </div>
                        </section>

                        <section className="detail_section2">
                            <h3 className="detail_section2-h3">Genres</h3>
                            <p className="detail_section2-p">{videoGameDetail.genres?.map((g) => g.name).join(", ")}</p>
                            <h3 className="detail_section2-h3">Platforms</h3>
                            <p className="detail_section2-p">{videoGameDetail.platforms?.map((p) => p.name).join(", ")}</p>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
