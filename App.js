import React from 'react';
import HolaMundo from './componentes/holamundo.js';
import Tarjeta from './componentes/tarjeta.js';
import Contador from './componentes/contador.js';
import ListaTareas from './componentes/tareas.js';
import Formulario from './componentes/formulario.js';

const App = () => {
  return (
    <div className="app-container">
      {/* 1. Hola Mundo */}
      <HolaMundo />

      {/* 2. Tarjeta de Presentación con props */}
      <Tarjeta 
        nombre="Lionel" 
        apellido="Messi" 
        profesion="Desarrollador Web" 
        imagen="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSAHmDSOdLA5YgFlEkMmgdweIf3jyGI0EGKqU5U7TpO70GFAY48v1N51eMRpY6mbG-VzfPvgObhOwB8lX4" alt="Lionel Messi"
      />

      {/* 3. Contador */}
      <Contador />

      {/* 4. Lista de Tareas */}
      <ListaTareas />

      {/* 5. Formulario Simple */}
      <Formulario />
    </div>
  );
}

export default App;
