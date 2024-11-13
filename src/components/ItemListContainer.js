import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      let url = 'https://dummyjson.com/products';
      if (category) {
        url += `/category/${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products || []);
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>{category ? `Categoría: ${category}` : 'Todos los productos'}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

