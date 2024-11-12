import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CatalogoContainer from './containers/CatalogoContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CatalogoContainer />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
