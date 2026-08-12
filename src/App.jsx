import { useState } from 'react';
import { Outlet } from "react-router";
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";


function App() {

  const [cart, setCart] = useState({});

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>)
}

export default App
