import styles from "./Card.module.css"
import { useOutletContext } from "react-router";

export default function Card({ data }) {
    const [cart, setCart] = useOutletContext();
    const count = cart[data.id] ? cart[data.id].count : null;

    const addItemToCart = (item) => () => {
        let id = item.id;
        let newCart = { ...cart };
        if (newCart[id]) newCart[id].count++
        else newCart[id] = { ...item, count: 1 };
        setCart(newCart);
    }

    return <div className={styles.card} >
        <h3>{data.name}</h3>
        <p>{data.price} peták</p>
        <button onClick="">-</button><button onClick={addItemToCart(data)}>+</button>
        {count && <p>in cart: {count}</p>}
    </div>
}