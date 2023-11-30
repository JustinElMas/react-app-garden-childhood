import React from 'react';
import PickMeals from "../assets/img/pocoyo-banner.jpg";
import ChooseMeals from "../assets/img/pocoyo-school.jpg";
import DeliveryMeals from "../assets/img/pocoyo.webp";

const work = () => {
    
  const workInfoData = [
    {
      image: PickMeals,
      title: "Jardín y Pre-jardín",
      text: "Educamos a la próxima generación"
    },

    {
      image: ChooseMeals,
      title: "Refuerzo Escolar",
      text: "Te ayudamos en las tareas o refuerzo para áreas académicas"
    },

    {
      image: DeliveryMeals,
      title: "Caminadores",
      text: "También para los más pequeños"
    }

  ]

  return <div className='work-section-wrapper'>

    <div className='work-section-top'>
        <p className='primary-subheading'>Nuestros Servicios </p>
        <h1 className='primary-heading'>Descúbrelo Hoy: </h1>

        <p className='primary-text'>Las mejores comidas rápidas de la ciudad de Leticia, calido ambiente familiar y para eventos. </p>
    </div>

    <div className='work-section-bottom'>
        {
          workInfoData.map((data) => (
            <div className='work-section-info'>
              <div className='info-boxes-img-container'>
                <img src={data.image} alt="es-una-imagen" />
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            </div>
          ))
        }
    </div>

  </div>
};

export default work;