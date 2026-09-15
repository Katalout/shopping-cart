import { useState, useRef } from 'react';
import { Outlet, ScrollRestoration, useParams } from "react-router";
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from './Components/Footer/Footer.jsx';
import { data, useProducts } from "./Components/utility.js";



function App() {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState({});
  const nav = useRef(null);

  return (
    <>
      <ScrollRestoration />
      <Navbar cart={cart} ref={nav} />
      <main>
        <Outlet context={{ cart, setCart, products, error, loading, nav }} />
      </main>
      <Footer />
    </>)
}

export default App
