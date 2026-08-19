import { Link } from "react-router";
import styles from "./Navbar.module.css"
import { useState, useEffect } from "react";
import AnimateThis from "../AnimateThis/AnimateThis";
import search from "../../assets/search.png";

export default function Navbar({ cart }) {
    function countItems() {
        let count = 0;
        Object.values(cart).forEach(item => count += item.count);
        return count;
    }

    let cartCount = countItems();

    return (
        <nav>
            <h1><Link to="/">Brand</Link></h1>
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
            <img src={search} alt="search" />
        </nav>
    )
}
// 