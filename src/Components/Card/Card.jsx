import styles from "./Card.module.css"
import { useOutletContext } from "react-router";

export default function Card({ data }) {
    const [cartCount, setCartCount] = useOutletContext();
    const incrCart = () => setCartCount((c) => c + 1);
    const decrCart = () => setCartCount((c) => c - 1);

    return <div className={styles.card} >
        <h3>{data.name}</h3>
        <p>{data.price} peták</p>
        <button onClick={decrCart}>-</button><button onClick={incrCart}>+</button>
    </div>
}