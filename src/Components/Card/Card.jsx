import styles from "./Card.module.css"
import { useOutletContext } from "react-router";
import { useRef, useState } from "react";

export default function Card({ data }) {
    const [cart, setCart] = useOutletContext();
    const count = cart[data.id] ? cart[data.id].count : null;
    const input = useRef(null);
    const [inputVal, setInputVal] = useState('');

    let current = inputVal === "" ? 0 : parseInt(inputVal);

    const incrementVal = () => {
        setInputVal((current + 1).toString())
    }
    const decrementVal = () => {
        if (current > 0) {
            let newValue = (current - 1).toString();
            setInputVal(newValue);
        }
    }

    const addItemToCart = (item) => () => {
        if (current > 0) {
            let id = item.id;
            let newCart = { ...cart };
            if (newCart[id]) newCart[id].count += current;
            else newCart[id] = { ...item, count: current };
            setCart(newCart);
            setInputVal("");
        }
    }
    /* const removeItemFromCart = (item) => () => {
        let id = item.id;
        let newCart = { ...cart };
        if (newCart[id].count > 1) newCart[id].count--
        else delete newCart[id];
        setCart(newCart);
    } */

    const onChange = (e) => {
        setInputVal(e.target.value);
    }

    return <div className={styles.card} >
        <h3>{data.name}</h3>
        <p>{data.price} peták</p>
        <label htmlFor={data.id}>Item counter: </label><button onClick={decrementVal}>-</button><input ref={input} className={styles.input} type="number" name="count" id={data.id} onChange={onChange} value={inputVal} />
        <button onClick={incrementVal}>+</button>
        <button onClick={addItemToCart(data)} disabled={current === 0} >Add to cart</button>
        {count && <p>in cart: {count}</p>}
    </div>
}