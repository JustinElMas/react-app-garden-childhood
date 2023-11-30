import React from 'react';
import AboutBackground from "../assets/img/pocoyo-school.jpg";
import AboutBackgroundImage from "../assets/img/wall.avif";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {

  return  <div className='about-section-container' id="about">

        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="imagen-de-fondo-acerca-de-nosotros" />
        </div>

        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="otra-imagen-de-fondo" />
        </div>

        <div className='about-section-text-container'>
            <p className='primary-subheading'>Acerca de nosotros: </p>
            <h1 className='primary-heading'>
                "Con amor se construye los hijos".
            </h1>
            <p className='primary-text'>
                En nuestras instalaciones estamos listos para atenderte y que disfrutes el mejor servicio.
            </p>

            <div className='about-buttons-container'>
                <button className='secondary-button'>Comprar</button>
                <button className='watch-video-button'>
                    {" "}
                    <BsFillPlayCircleFill></BsFillPlayCircleFill>Ver video
                </button>
            </div>

        </div>

    </div>

}

export default About