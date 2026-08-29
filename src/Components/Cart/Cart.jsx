import { Link, useOutletContext } from "react-router";
import Card from "../Card/Card";
import styles from "./Cart.module.css";

export default function Cart() {
    const { cart, setCart } = useOutletContext();
    const cartArray = Object.values(cart);

    const total = cartArray.reduce(
        (previous, current) => {
            let sum = previous + (current.count * current.price);
            return sum;
        },
        0,
    );

    function countItems() {
        let count = 0;
        cartArray.forEach(item => count += item.count);
        return count;
    }

    let cartCount = countItems();

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
                            <p>Items:<span>{cartCount}</span></p>
                            <p className={styles.total}>Total:<span>{total} €</span></p>
                            <button className={styles.checkout}>Checkout</button>
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