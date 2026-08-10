import styles from "./Card.module.css"

export default function Card({ data }) {
    return <div className={styles.card} >
        <h3>{data.name}</h3>
        <p>{data.price} peták</p>
    </div>
}