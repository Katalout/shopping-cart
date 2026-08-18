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
            <ul className={styles.nav}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="shopping">Shopping</Link>
                </li>
                <li>
                    <Link to="cart">Cart
                        {cartCount > 0 && <AnimateThis content={cartCount} />}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
// 