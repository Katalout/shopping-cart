import styles from "./Card.module.css"
import { useOutletContext } from "react-router";
import { useRef, useState } from "react";

export default function Card({ data, inCart }) {
    const { cart, setCart } = useOutletContext();
    const count = cart[data.id] ? cart[data.id].count : 0;
    const input = useRef(null);
    const [inputVal, setInputVal] = useState(0);

    let current = inputVal === "" ? 0 : parseInt(inputVal);
    if (inCart) current = 1;

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
        let id = item.id;
        let newCart = { ...cart };
        if (newCart[id]) newCart[id].count += 1;
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

    if (inCart) return (
        <div className={styles.cartCard}>
            <div className="left">
                <div className={styles.imgwrapper}><img src={data.image} alt="" /></div>
                <h3>{data.name}</h3>
                <p>{data.price} peták/pcs</p>
            </div>
            <div className={styles.right}>

                <p><button onClick={removeItemFromCart(data)} >{(count > 1) ? "-" : "Remove from cart"}</button>{count} pcs<button onClick={addItemToCart(data)}>+</button><br />{data.price * count} peták</p>
            </div>
        </div>)
    else
        return (
            <div className={styles.card} >
                <div className={styles.imgwrapper}><img src={data.image} alt="" /></div>
                <h3>{data.name}</h3>
                <div className={styles.price}>
                    <p>{data.price} €</p>
                    <div>
                        <button onClick={removeItemFromCart(data)}>-</button>
                        <span>{count}</span>
                        <button onClick={addItemToCart(data)}>+</button>
                    </div>
                </div>

            </div>
        )
}