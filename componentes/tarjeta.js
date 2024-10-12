import React from 'react';
import './App.css'; // Si tienes estilos específicos

const Tarjeta = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`${nombre} ${apellido}`} />
      <h2>{nombre} {apellido}</h2>
      <p>{profesion}</p>
    </div>
  );
}

export default Tarjeta;
