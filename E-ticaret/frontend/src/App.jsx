
import { Route, Router, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./App.css"; 
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogPages from "./pages/BlogPages";
import BlogDetailPage from "./pages/BlogDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (

    <Routes>
      <Route path="/" element={  <HomePage/>} />
      <Route path="/shop" element={  <ShopPage/>} />
      <Route path="/contact" element={  <ContactPage/>} />
      <Route path="/auth" element={   <AuthPage/>} />
      <Route path="/cart" element={  <CartPage/>} />
      <Route path="/blog" element={   <BlogPages/>} />
      <Route path="/blog/:id" element={  <BlogDetailPage/>} />
      <Route path="/product/:id" element={   <ProductDetailPage/>} />
    </Routes>
  );
}

export default App;
