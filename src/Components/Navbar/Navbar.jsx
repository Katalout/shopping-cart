import { Link } from "react-router";
import styles from "./Navbar.module.css"
import { useState, useEffect, useRef } from "react";

export default function Navbar({ cart, ref }) {
    function countItems() {
        let count = 0;
        Object.values(cart).forEach(item => count += item.count);
        return count;
    }

    let cartCount = countItems();

    const counter = useRef(null);

    const [animation, setAnimation] = useState(false);

    //calculate itemscount




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
                        <span ref={ref} className={styles.cartCount} >
                            {cartCount > 0 && cartCount}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
// 