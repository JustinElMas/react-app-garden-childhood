// SeccionProfesores.js

import React from 'react';
import Profesor from './Teacher'; // Asegúrate de ajustar la ruta si es necesario
import TeacherWomen from '../assets/img/profe-jardin-1.jpeg';
import TeacherMen from '../assets/img/profe-jardin-2.jpg';

const SeccionProfesores = () => {
  const profesores = [
    {
      nombre: 'Eduardo Junior Pacheco Nuñez',
      especialidad: 'Director General',
      foto: TeacherMen,
    },
    {
      nombre: 'Angie Carolina Soria Plácido',
      especialidad: 'Educadora en primera infancia',
      foto: TeacherWomen,
    },
    // Puedes agregar más objetos para representar a otros profesores
  ];

  return (
    <div className="seccion-profesores">
      <h2>Nuestros Profesores</h2>
      <div className="profesores-container">
        {profesores.map((profesor, index) => (
          <Profesor
            key={index}
            nombre={profesor.nombre}
            especialidad={profesor.especialidad}
            foto={profesor.foto}
          />
        ))}
      </div>
    </div>
  );
};

export default SeccionProfesores;
