import React from 'react';
import ProfilePic from '../assets/img/1.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return <div className='work-section-wrapper' id='testimonials'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonios:</p>
            <h1 className='primary-heading'>
                Lo que dicen nuestros clientes:
            </h1>
            <p className='primary-text'>
                Nos encanta escuchar a nuestros clientes, son el motor de nuestro servicio y nos impulsan a cada día ser mejores. Por eso cada semana recopilamos los mejores testimonios:
            </p>

            <div className='testimonial-section-bottom'>
                <img src= {ProfilePic} alt="un-cliente-de-buffalo-bill" />
                <p>
                "El mejor ambiente para que nuestros hijos aprendan".
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                </div>

                <h2>Edwin Lopez</h2>
            </div>
        </div>
  </div>
}

export default Testimonials;