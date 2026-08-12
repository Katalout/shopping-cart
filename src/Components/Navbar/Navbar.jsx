import { Link } from "react-router";
import styles from "./Navbar.module.css"
import { useState } from "react";

export default function Navbar({ cart }) {
    //calculate itemscount
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
                    <Link to="cart">Cart {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}</Link>
                </li>
            </ul>
        </nav>
    )
}