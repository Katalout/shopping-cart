import { useState, useRef } from 'react';
import { Outlet } from "react-router";
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import { data, useProducts } from "./Components/utility.js";


function App() {
  const { products, error, loading } = useProducts();
  const cartRef = useRef(null)
  const [cart, setCart] = useState({});

  function nudge() {
    cartRef.current.classList.add("animation");
    console.log("törtenes", cartRef.current);
    setTimeout(() => {
      cartRef.current.classList.remove("animation");
      console.log("removed", cartRef.current)
    }, 1500)
  }

  return (
    <>
      <Navbar cart={cart} ref={cartRef} />
      <Outlet context={{ cart, setCart, products, error, loading, nudge }} />
    </>)
}

export default App
