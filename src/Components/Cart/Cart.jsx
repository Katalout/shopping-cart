import { Link, useOutletContext } from "react-router";
import Card from "../Card/Card";
import styles from "./Cart.module.css";

export default function Cart() {
    const [cart, setCart] = useOutletContext();
    const cartArray = Object.values(cart);
    return (
        <>
            {(cartArray.length > 0) ?
                <div>
                    <h2>Items in your cart:</h2>
                    <div className={styles.cartContainer}>{cartArray.map(item => <Card key={item.id} data={item} inCart={true} />)}</div>
                </div>
                :
                <h2>Your cart is empty. <br /> <Link to="../shopping">Treat yo self!</Link>
                </h2>
            }
        </>
    )
}