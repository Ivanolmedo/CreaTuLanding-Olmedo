// ItemListContainer.js
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebaseConfig"; // Conexión a Firebase
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "products");
        let q;

        if (category) {
          q = query(productsRef, where("category", "==", category));
        } else {
          q = query(productsRef);
        }

        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products from Firestore", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>{category ? category.toUpperCase() : "Novedades"}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;


