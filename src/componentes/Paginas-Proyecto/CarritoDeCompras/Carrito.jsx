import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';
import { decrement } from '../../../Store/carrito/CountProduct';
import { habilitar } from '../../../Store/carrito/ableButton';

const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
    dispatch(decrement());
    dispatch(habilitar()); // Habilitar el botón después de eliminar un producto
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <button
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
