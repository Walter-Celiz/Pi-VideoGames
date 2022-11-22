import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getDetails from "../redux/actions";
import Navbar from "./Navbar";
import Loading from "./Loading";
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
            <Navbar />
            {!videoGameDetail[0] ? (
                <div className="mainContainer2">
                    <Loading />
                </div>
            ) : (
                <div className="detailContainer">
                    <h2 className="detail_h2">{videoGameDetail[0].name}</h2>
                    <div className="detail">
                        <section className="detail_section">
                            <div className="detail_section-div">
                                <p className="detail_section-p">
                                    Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.
                                    Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.
                                    Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus d
                                </p>
                                {/* <p className="detail_content_p">{videoGameDetail[0].description}</p> */}
                                <h4 className="detail_section-h4">
                                    Released: {videoGameDetail[0].released}&nbsp;&nbsp;
                                    Rating:{" "}{videoGameDetail[0].rating}
                                </h4>
                            </div>
                            <div className="detail_section-div2">
                                <img
                                    className="detail_section-img"
                                    src={videoGameDetail[0].background_image}
                                    alt={videoGameDetail[0].name}
                                />
                            </div>
                        </section>

                        <section className="detail_section2">
                            <h3 className="detail_section2-h3">Genres</h3>
                            <p className="detail_section2-p">{videoGameDetail[0].genres.join(" - ")}</p>
                            <h3 className="detail_section2-h3">Platforms</h3>
                            <p className="detail_section2-p">{videoGameDetail[0].platforms.join(" - ")}</p>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
