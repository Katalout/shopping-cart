//import merch, display them on cards
import styles from "./Shopping.module.css"
import data from "../utility"
import Card from "../Card/Card"

export default function Shopping() {
    return (
        <>
            <h2>Shopping page</h2>
            <div className={styles.cardContainer}>{data.map(item => <Card key={item.id} data={item} />)}
            </div>
        </>
    )
}