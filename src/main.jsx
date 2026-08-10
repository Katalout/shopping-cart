import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Shopping from './Components/Shopping/Shopping.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shopping", element: <Shopping /> },
      { path: "cart", element: <Cart /> },],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
