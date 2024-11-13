export const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products'); // Cambia por tu URL de la API
      const data = await response.json();
      return data.products; // Asegúrate de que 'products' es la clave correcta
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };