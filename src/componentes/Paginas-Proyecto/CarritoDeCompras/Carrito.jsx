import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Store/carrito/carritoSlice';

const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.products);
console.log("carrito que tiene:",cart)
console.log("car",cart.length)


  const handleRemoveFromCart = (productId) => {
    console.log("id:"+productId)
    dispatch(removeFromCart({ id: productId }));
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
              <button onClick={()=>handleRemoveFromCart(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;