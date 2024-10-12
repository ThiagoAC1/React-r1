import React, { useState } from 'react';
import './App.css'; // Si tienes estilos específicos

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const marcarCompletada = (index) => {
    const tareasActualizadas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  return (
    <div className="lista-tareas">
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Agregar nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li 
            key={index} 
            className={tarea.completada ? 'completada' : ''}
            onClick={() => marcarCompletada(index)}
          >
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
