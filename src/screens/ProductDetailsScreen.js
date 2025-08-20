import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchProductById } from "../hooks/use-fetch-product-by-id";
import { CartContext } from "../context/cart-context";
import { addToCartMessage } from "../helpers/cart.helper";
import { getProductInfo } from "../helpers/product.helper";
import "./ProductDetailsScreen.css";

const ProductDetailsScreen = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useFetchProductById({
    productId,
    isUsingLocalData: true,
  });
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      addToCartMessage(product.masterData?.current.name["en-US"]);
    }
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!product) return <div className="error">Producto no encontrado</div>;

  const { name, price, imageUrl, description } = getProductInfo(product);

  return (
    <div className="product-details-container">
      <div className="product-details-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Volver
        </button>
        <h1 className="product-details-title">Detalles</h1>
      </div>

      <div className="product-details-content">
        <img src={imageUrl} alt={name} className="product-details-image" />
        <div className="product-details-info">
          <h2 className="product-details-name">{name}</h2>
          <p className="product-details-price">$ {price}</p>
          {description && (
            <p className="product-details-description">{description}</p>
          )}
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
