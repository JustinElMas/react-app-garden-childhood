import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/img/fondo-banner.png";
import BannerImage from "../assets/img/pizza-1.jpg";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
    return <div className="home-container">
        <Navbar/>

        <div className="home-banner-container">

            <div className="home-bannerImage-container">
                <img src= {BannerBackground} alt="es-el-banner-de-atras" />
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

        </div>
    </div>
};

export default Home;

