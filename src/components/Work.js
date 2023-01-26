import React from 'react';
import PickMeals from "../assets/img/fast-food.svg";
import ChooseMeals from "../assets/img/launch.svg";
import DeliveryMeals from "../assets/img/banck.svg";

const work = () => {
    
  const workInfoData = [
    {
      image: PickMeals,
      title: "Comidas Rápidas",
      text: "La mejor cómida de la triple frontera."
    },

    {
      image: ChooseMeals,
      title: "Tus antojos",
      text: "Perros clientes, hamburguesas, picadas para + 4 personas, y más ¿Qué estas esperando?."
    },

    {
      image: DeliveryMeals,
      title: "Domicilios",
      text: "Lleagamos hasta tu casa."
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