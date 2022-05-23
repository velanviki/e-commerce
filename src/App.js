import "./App.css";
import Navbar from "./Componenets/Navbar";
import Home from "./Componenets/Home";
import Products from "./Componenets/Products";
import Product from "./Componenets/Product";

import { Routes, Route } from "react-router-dom";
import Cart from "./Componenets/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />



        </Routes>
    
    </div>
  );
}

export default App;
