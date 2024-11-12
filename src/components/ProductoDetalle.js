import React from 'react';
import { useParams } from 'react-router-dom';

function ProductoDetalle() {
  const { productoId } = useParams();
  return <div>Detalle del producto con ID: {productoId}</div>;
}

export default ProductoDetalle;
