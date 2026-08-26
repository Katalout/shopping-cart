import styles from "./Card.module.css"
import { useOutletContext } from "react-router";
import { useRef, useState } from "react";

export default function Card({ data, inCart }) {
    const { cart, setCart } = useOutletContext();
    const count = cart[data.id] ? cart[data.id].count : 0;
    const input = useRef(null);
    const [inputVal, setInputVal] = useState(0);

    /* let current = inputVal === "" ? 0 : parseInt(inputVal);
    if (inCart) current = 1;

    const incrementVal = () => {
        setInputVal((current + 1).toString())
    }
    const decrementVal = () => {
        if (current > 0) {
            let newValue = (current - 1).toString();
            setInputVal(newValue);
        }
    } */

    const increaseItem = (item) => () => {
        let id = item.id;
        let newCart = { ...cart };
        if (newCart[id]) newCart[id].count += 1;
        else newCart[id] = { ...item, count: 1 };
        setCart(newCart);
    }

    const decreaseItem = (item) => () => {
        let id = item.id;
        let newCart = { ...cart };
        if (newCart[id].count > 1) newCart[id].count--
        else delete newCart[id];
        setCart(newCart);
    }

    const removeItem = (item) => () => {
        let id = item.id;
        let newCart = { ...cart };
        delete newCart[id];
        setCart(newCart);
    }

    if (inCart) return (
        <div className={styles.cartCard}>
            <div className={styles.cartimgwrapper} ><img src={data.image} alt="" /></div>
            <div className={styles.center}>
                <h3>{data.name}</h3>
                <p>{data.price} €/pcs</p>
                <div className={styles.cartCountButtons}>
                    <button onClick={decreaseItem(data)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 12h14"></path></svg>
                    </button>
                    {count}
                    <button onClick={increaseItem(data)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
                </div>
            </div>
            <button className={styles.remove} onClick={removeItem(data)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" /></svg></button>
        </div>)
    else
        return (
            <div className={styles.card} >
                <div className={styles.imgwrapper}><img src={data.image} alt="" /></div>
                <h3>{data.name}</h3>
                <div className={styles.price}>
                    <p>{data.price} €</p>
                    <div className={styles.countButtons}>
                        <button onClick={decreaseItem(data)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 12h14"></path></svg></button>
                        <span>{count}</span>
                        <button onClick={increaseItem(data)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
                    </div>
                </div>

            </div>
        )
}