import React from 'react';
import Navbar from './components/Navbar';
import Contenedor from './components/Contenedor';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Contenedor mensaje="¡Bienvenido a nuestra tienda! Explora nuestros productos." />
    </div>
  );
}

export default App;