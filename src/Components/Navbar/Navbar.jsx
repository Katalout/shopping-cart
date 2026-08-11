import { Link } from "react-router";
import styles from "./Navbar.module.css"
import { useState } from "react";

export default function Navbar({ cartCount }) {

    /* 
    trigger animation on statechange? or can i just use good ol' addeventhandler in a separate, global js file? does it see in the components? wtffff??
    
    const [prevCount, setPrevCount] = useState(cartCount);
      const [trend, setTrend] = useState(null);
      if (prevCount !== cartCount) {
        setPrevCount(cartCount);
        setTrend(count > prevCount ? 'increasing' : 'decreasing');
      }
    
    function nudge(){
    
    } */

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
                    <Link to="cart">Cart <span className={styles.cartCount}>{cartCount > 0 && cartCount}</span></Link>
                </li>
            </ul>
        </nav>
    )
}