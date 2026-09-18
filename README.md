# Webshop demo - <a href="https://shopping-cart-chi-five-46.vercel.app/">view live</a>

A modern e-commerce frontend web application built with **⚛️ React**.
The design is **responsive** to all screen sizes between XS mobile and widescreen monitors.
The project focuses on **API integration, reusable components and centralized state management**.

It aims to minimise distracting features to achieve a clean, easy-to-use shopping experience.
Users can browse products, put them into their shopping cart, manage quantities, and review their order summary on the cart page.

---

## Features

- Browse a collection of products
- Dynamic product details fetched from an external API
- Product quantity management
- Interactive shopping cart:
    - Add and remove products
    - Change product quantities
    - Clear the entire cart with one click
    - Automatic item count and total price calculation
- Responsive design
- Reusable React components
- Cart state management with the Context API
- Custom React hooks

---

## ⚙️ Under the hood

### 🛍️ Product Browsing

Products are fetched from the FakeStore **RESTful API** and normalized through a json data adapter before being used throughout the application.

### 🛒 Cart Management

The shopping cart is managed using **React Context**.
Different parts of the application - such as the header, shopping page, product cards, cart items, and cart summary — can access and update the same cart state.

The cart supports:

- Adding products
- Increasing/decreasing quantities of existing products
- Removing individual products
- Clearing the entire cart
- Calculating total items and total price live

### Navigation
**React Router** is used for client-side navigation between pages.

---

## Tech Stack
Vite
React
React Router
Context API
CSS Modules
Vercel

---

## 📁 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components and CSS modules
    └── utility.js   # Utility functions, API and data adapter
└── main.jsx         # Application's entry point
```

---

## Art credits:

- hero photo by <a href="https://unsplash.com/@silverkblack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vitaly Gariev</a> on <a href="https://unsplash.com/photos/two-people-riding-in-a-shopping-cart-outside-CizrdMZFm0g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- clothing category photo by <a href="https://unsplash.com/@ns157?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NS</a> on <a href="https://unsplash.com/photos/woman-in-green-hoodie-sitting-on-brown-wooden-bench-37rVmK3jY-c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- electronics category photo by <a href="https://unsplash.com/@_rxshxxd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rasheed Kemy</a> on <a href="https://unsplash.com/photos/man-in-train-holding-smartphone-oqY09oVTa3k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

- jewelery category photo by <a href="https://unsplash.com/@olaszkolda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ola szkolda</a> on <a href="https://unsplash.com/photos/two-blonde-women-in-denim-jackets-sharing-a-moment-GHYyVXNP31o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>




