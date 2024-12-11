// Cart.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Cambia esto


const Cart = () => {
  const { cartItems, clearCart, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async () => {
    const order = {
      buyer: {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
      items: cartItems,
      total: totalPrice(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creando la orden:", error);
    }
  };

  if (orderId) {
    return <p>¡Gracias por tu compra! Tu ID de orden es: {orderId}</p>;
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.quantity * item.price}</p>
        </div>
      ))}
      <h3>Total: ${totalPrice()}</h3>
      <button onClick={handleCheckout}>Confirmar Compra</button>
    </div>
  );
};

export default Cart;
