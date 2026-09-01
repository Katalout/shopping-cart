import { Link } from "react-router";
import styles from "./Navbar.module.css"
import { useState, useEffect } from "react";
import AnimateThis from "../AnimateThis/AnimateThis";

export default function Navbar({ cart }) {
    function countItems() {
        let count = 0;
        Object.values(cart).forEach(item => count += item.count);
        return count;
    }

    let cartCount = countItems();

    return (
        <nav>
            <Link to="/"><h1 className={styles.brand}>Brand</h1><span className={styles.brandtext}>for joy</span>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="shopping">Shopping</Link>
                </li>
                <li>
                    <Link className={styles.count} to="cart">Cart
                        {cartCount > 0 && <AnimateThis content={cartCount} />}
                    </Link>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
        </nav>
    )
}
// 