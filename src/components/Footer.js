import React from 'react';
import Logo from "../assets/img/fondo.jpg";
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return  (
  <footer className='footer-wrapper'>
     <div className='footer-section-one'>
        <div className='footer-logo-container'>
            <img src={Logo} alt="logo-del-restaurante" />
        </div>

        <div className='footer-icons'>
            <BsFacebook></BsFacebook>
            <BsTwitter></BsTwitter>
            <BsWhatsapp></BsWhatsapp>
            <BsYoutube></BsYoutube>
        </div>
     </div>

     <div className='footer-section-two'>
        
        <div className='footer-section-columns'>
                <span>Información</span>
                <span>Ayuda</span>
                <span>Compartir</span>
                <span>Ubicación</span>
                <span>Comunidad</span>
                <span>Blog</span>
                <span>Trabaja con nosotros</span>
            </div>
            
        <div className='footer-section-columns'>
            <span>buffalobill@gmail.com</span>
            <span>buffalobill@gmail.com</span>
            <a href="tel: 3102220022">321 255 4031</a>
        </div>

        <div className='footer-section-columns'>
            <span>Términos y conidiciones</span>
            <span>Políticas de Privacidad</span>
        </div>

    </div>
  </footer>

  );
};

export default Footer;