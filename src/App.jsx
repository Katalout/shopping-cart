import { useState } from 'react';
import { Outlet } from "react-router";
import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";


function App() {
  const [cartCount, setCartCount] = useState(0);


  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet context={[cartCount, setCartCount]} />
    </>)
}

export default App
