import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/img/fondo-banner.png";
import astrounautImg from "../assets/img/astronauta.jpeg";
import BannerImage from "../assets/img/pizza-1.jpg";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
    return <div className="home-container" id="home">
        <Navbar/>

        <div className="home-banner-container">

            <div className="home-bannerImage-container">
                {<img src= {BannerBackground} alt="es-el-banner-de-atras" />}
                <div className="astronauta-img">
                {<img src= {astrounautImg} alt="astronauta-ilustrativo-pizza" />}
                </div>
            </div>

            <div className="home-text-section">
                <h1 className="primary-heading">
                    La mejor comida en tu paladar, a sólo una llamada.
                </h1>
                <div className="my-items-bill">
                    <p className="primary-text">Buffalo bill Restaurante y Cómidas Rápidas</p>
                    <ul>
                        <li>Desgranados</li>
                        <li>Perros Calientes</li>
                        <li>Pizzas</li>
                        <li>Mucho más...</li>
                    </ul>
                </div>
                
                <button className="secondary-button">
                    Pide ahora <FiArrowRight></FiArrowRight>
                </button>

            </div>

            <div className="home-image-container">
                <img src={BannerImage} alt="pizza-de-bufalo-bil" />
            </div>

            <div className="container-space">
                <div className="ala-l"></div>
                <div className="ala-r"></div>

                <div className="ala-z"></div>
                <div className="ala-x"></div>
            </div>

        </div>
    </div>
};

export default Home;

