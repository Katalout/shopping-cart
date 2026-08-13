//import merch, display them on cards
import styles from "./Shopping.module.css";
import { useOutletContext } from "react-router";
import Card from "../Card/Card";

export default function Shopping() {
    const { products, error, loading } = useOutletContext();

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Sorry, I can't load the products at the moment...</h2>

    return (
        <>
            <h2>Shopping page</h2>
            <div className={styles.cardContainer}>{products.map(item => <Card key={item.id} data={item} inCart={false} />)}
            </div>
        </>
    )
}