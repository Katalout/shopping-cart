import { Link, useOutletContext } from "react-router";
import Card from "../Card/Card";
import styles from "./Cart.module.css";

export default function Cart() {
    const { cart, setCart } = useOutletContext();
    const cartArray = Object.values(cart);
    return (
        <div className="cart">
            {(cartArray.length > 0) ?
                <section>
                    <h2>Items in your cart</h2>
                    <div className={styles.cartContainer}>
                        <div className={styles.cartItems}>{cartArray.map(item => <Card key={item.id} data={item} inCart={true} />)}
                        </div>
                        <div className={styles.summary}>
                            <h2>Order summary</h2>
                            <p>Items: </p>
                            <p>Total: </p>
                            <button>Checkout</button>
                        </div>
                    </div>

                </section>

                :

                <h2>Your cart is empty. <br /> <Link to="../shopping">Go shopping</Link>
                </h2>
            }
        </div>
    )
}