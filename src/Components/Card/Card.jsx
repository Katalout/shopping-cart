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
    const removeItemFromCart = (item) => () => {
        let id = item.id;
        let newCart = { ...cart };
        if (newCart[id].count > 1) newCart[id].count--
        else delete newCart[id];
        setCart(newCart);
    }

    return <div className={styles.card} >
        <h3>{data.name}</h3>
        <p>{data.price} peták</p>
        {count && <button onClick={removeItemFromCart(data)}>-</button>}<button onClick={addItemToCart(data)}>+</button>
        {count && <p>in cart: {count}</p>}
    </div>
}