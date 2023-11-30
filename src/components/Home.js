import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/img/pocoyo-school.jpg";
/* import astrounautImg from "../assets/img/pocoyo.webp"; */
import BannerImage from "../assets/img/pocoyo.webp";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
    return <div className="home-container" id="home">
        <Navbar/>

        <div className="home-banner-container">

            <div className="home-bannerImage-container">
                {<img src= {BannerBackground} alt="es-el-banner-de-atras" />}
            </div>

            <div className="home-text-section">
                <h1 className="primary-heading">
                    El mejor ambiente de <mark>Aprendizaje</mark> para tus hijos.
                </h1>
                <div className="my-items-bill">
                    <p className="primary-text">Jardín Infantil Pocoyo</p>
                    <ul>
                        <li>Párvulos</li>
                        <li>Caminadores</li>
                        <li>Refuerzo Escolar</li>
                        <li>Jardín y Prejardín</li>
                    </ul>
                </div>
                
                <button className="secondary-button">
                    Empieza hoy <FiArrowRight></FiArrowRight>
                </button>

            </div>

{/*             <div className="home-image-container">
                <img src={BannerImage} alt="pizza-de-bufalo-bil" />
            </div> */}
{/* 
            <div className="container-space">
                <div className="ala-l"></div>
                <div className="ala-r"></div>

                <div className="ala-z"></div>
                <div className="ala-x"></div>
            </div> */}

        </div>
    </div>
};

export default Home;

