import { Link, useOutletContext } from "react-router";
import Card from "../Card/Card";
import styles from "./Cart.module.css";

export default function Cart() {
    const { cart, setCart } = useOutletContext();
    const cartArray = Object.values(cart);

    const total = cartArray.reduce(
        (previous, current) => {
            let sum = previous + (current.count * current.price);
            return Math.round(sum * 100) / 100;
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
                <section className={styles.cart}>
                    <h2 className="carttitle">Items in your cart</h2>
                    <div className={styles.cartContainer}>
                        <div className={styles.cartItems}>{cartArray.map(item => <Card key={item.id} data={item} inCart={true} />)}
                        </div>
                        <aside>
                            <div className={styles.summary}>

                                <h2 >Order summary</h2>
                                <p>Items:<span>{cartCount}</span></p>
                                <p className={styles.total}>Total:<span>{total} €</span></p>
                                <button className={styles.checkout}>Checkout</button>
                            </div>
                            <button className={styles.clear} onClick={clearCart}>Clear cart<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m634-440-81-80h69l110-200H353l-80-80h525q23 0 35.5 19.5t.5 42.5L692-482q-11 20-28 31t-30 11ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm540 52L566-280H304q-44 0-67-37.5t-3-78.5l42-86-72-162L28-820l56-56L876-84l-56 56ZM486-360l-80-80h-62l-40 80h182Zm136-160h-69 69Zm1.5 416.5Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5Z" /></svg></button>
                        </aside>
                    </div>

                </section>
            </div>
        )
    else return (
        <section className={styles.empty}>
            <h2>Your cart is empty.</h2>
            <Link to="../shopping/all">Go shopping</Link>

        </section>
    )


}