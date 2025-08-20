import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchProducts } from "../hooks/use-fetch-products";
import { CartContext } from "../context/cart-context";
import { addToCartMessage } from "../helpers/cart.helper";
import { getProductInfo } from "../helpers/product.helper";
import "./ProductsScreen.css";

const ProductsScreen = () => {
  const { products, loading, error } = useFetchProducts({
    isUsingLocalData: true,
  });
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    addToCartMessage(product.masterData?.current.name["en-US"]);
  };

  const handleProductPress = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  const renderProduct = (item) => {
    const { id, name, price, imageUrl } = getProductInfo(item);
    return (
      <div key={id} className="product" onClick={() => handleProductPress(id)}>
        <img src={imageUrl} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">$ {price}</p>
        <button
          className="add-button"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(item);
          }}
        >
          🛒
        </button>
      </div>
    );
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Nuestros productos</h1>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && (
        <div className="products-grid">{products.map(renderProduct)}</div>
      )}
    </div>
  );
};

export default ProductsScreen;
