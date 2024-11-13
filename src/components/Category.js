import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Category() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/category/${categoryId}`);
        if (!response.ok) throw new Error('Error en la solicitud de productos');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductsByCategory();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>Categoría: {categoryId}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
