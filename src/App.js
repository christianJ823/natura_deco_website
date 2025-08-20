import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart-context";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import MainScreen from "./screens/MainScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";
import CartScreen from "./screens/CartScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import PurchaseDetailsScreen from "./screens/PurchaseDetailsScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route
                path="/product-details/:productId"
                element={<ProductDetailsScreen />}
              />
              <Route
                path="/purchase-details"
                element={<PurchaseDetailsScreen />}
              />
              <Route path="/thank-you" element={<ThankYouScreen />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
