import { Link } from "react-router";
import styles from "./Navbar.module.css"

export default function Navbar() {
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
                    <Link to="cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}