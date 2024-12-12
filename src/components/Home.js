import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from './ItemList';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNovedades = async () => {
      setLoading(true);
      try {
        const productosCollection = collection(db, 'productos');
        const novedadesQuery = query(productosCollection, where('novedad', '==', true));
        const novedadesSnapshot = await getDocs(novedadesQuery);
        const novedadesList = novedadesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(novedadesList);
      } catch (error) {
        console.error('Error al obtener novedades:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNovedades();
  }, []);

  return (
    <div>
      <h1>Novedades</h1>
      {loading ? <p>Cargando novedades...</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default Home;

