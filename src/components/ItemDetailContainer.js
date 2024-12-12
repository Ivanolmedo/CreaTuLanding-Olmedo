import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(false); // Reinicia el estado de error
        setLoading(true); // Muestra el estado de carga
        const productDoc = doc(db, 'productos', id); // Referencia al documento en Firestore
        const productSnapshot = await getDoc(productDoc);

        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.error('El producto no existe en la base de datos.');
          setError(true); // Marca como error si no existe
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setError(true);
      } finally {
        setLoading(false); // Oculta el estado de carga
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar el producto. Intenta de nuevo más tarde.</p>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {product && <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
