import { useState, useRef } from 'react';
import { Outlet } from "react-router";
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from './Components/Header/Header.jsx';
import { data, useProducts } from "./Components/utility.js";


function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState({});

  return (
    <>
      <Header />
      <Navbar cart={cart} />
      <main>
        <Outlet context={{ cart, setCart, products, error, loading }} />
      </main>
    </>)
}

export default App
