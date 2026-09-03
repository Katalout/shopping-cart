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
        }, 0,
    );

    function countItems() {
        let count = 0;
        cartArray.forEach(item => count += item.count);
        return count;
    }

    let cartCount = countItems();

    const clearCart = () => {
        if (window.confirm("Are you sure you want to remove everything from your cart?")) {
            let newCart = {};
            setCart(newCart);
        }
    }
    if (cartArray.length > 0)
        return (
            <div className="cart">
                <section>
                    <h2 className="carttitle">Items in your cart</h2>
                    <div className={styles.cartContainer}>
                        <div className={styles.cartItems}>{cartArray.map(item => <Card key={item.id} data={item} inCart={true} />)}
                        </div>
                        <aside>
                            <div className={styles.summary}>
                                <h2>Order summary</h2>
                                <p>Items:<span>{cartCount}</span></p>
                                <p className={styles.total}>Total:<span>{total} €</span></p>
                                <button className={styles.checkout}>Checkout</button>
                            </div>
                            <button onClick={clearCart}>Clear cart</button>
                        </aside>
                    </div>

                </section>
            </div>
        )
    else return (
        <section className={styles.empty}>
            <h2>Your cart is empty.</h2>
            <Link to="../shopping">Go shopping</Link>

        </section>
    )


}