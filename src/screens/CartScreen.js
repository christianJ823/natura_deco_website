import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import { getProductInfo } from "../helpers/product.helper";
import "./CartScreen.css";

const CartScreen = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();

  const renderItem = (item) => {
    const { id, name, price, imageUrl } = getProductInfo(item);
    return (
      <div key={id} className="cart-item-container">
        <img src={imageUrl} alt={name} className="cart-item-image" />
        <div className="cart-item-details">
          <h3 className="cart-item-name">{name}</h3>
          <p className="cart-item-price">$ {price}</p>
          <div className="cart-button-container">
            <button
              className="cart-quantity-button"
              onClick={() => updateQuantity(id, item.quantity + 1)}
            >
              +
            </button>
            <span className="cart-item-quantity">{item.quantity}</span>
            <button
              className="cart-quantity-button"
              onClick={() => updateQuantity(id, item.quantity - 1)}
            >
              -
            </button>
            <button
              className="cart-remove-button"
              onClick={() => removeFromCart(id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Volver
        </button>
        <h1 className="cart-title">Carrito</h1>
      </div>

      {!cartItems.length ? (
        <p className="no-products">No hay productos en el carrito</p>
      ) : (
        <>
          <div className="cart-items">{cartItems.map(renderItem)}</div>

          <div className="cart-footer">
            <h3 className="order-info">Información de orden</h3>
            <p className="total-price">Precio total: $ {getTotalPrice()}</p>
            {cartItems?.length ? (
              <button
                className="order-button"
                onClick={() => navigate("/purchase-details")}
              >
                Realizar pedido
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
