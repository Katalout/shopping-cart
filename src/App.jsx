import { useState, useRef } from 'react';
import { Outlet } from "react-router";
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from './Components/Footer/Footer.jsx';
import { data, useProducts } from "./Components/utility.js";


function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState({});

  return (
    <>
      <Navbar cart={cart} />
      <main>
        <Outlet context={{ cart, setCart, products, error, loading }} />
      </main>
      <Footer />
    </>)
}

export default App
