import React from 'react';
import { useParams } from 'react-router-dom';

function Categoria() {
  const { categoriaId } = useParams();
  return <div>Productos en la categoría: {categoriaId}</div>;
}

export default Categoria;
