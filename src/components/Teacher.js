// Profesor.js

import React from 'react';

const Profesor = ({ nombre, especialidad, foto }) => {
  return (
    <div className="profesor-card">
      <img src={foto} alt={`${nombre}`} className="profesor-foto" />
      <h3>{nombre}</h3>
      <p>Especialidad: {especialidad}</p>
    </div>
  );
};

export default Profesor;
