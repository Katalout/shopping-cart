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
            <section>
                {/*  <p className="sectionLabel">Collection</p> */}
                <h2 className="sectionLabel shopping" >Clothing</h2>
                <div className={styles.cardContainer}>{products.filter(item => item.category.includes("clothing")).map(item => <Card key={item.id} data={item} inCart={false} />)}
                </div>
            </section>
            <section>
                <h2 className="sectionLabel shopping" >Jewellery</h2>
                <div className={styles.cardContainer}>{products.filter(item => item.category === "jewelery").map(item => <Card key={item.id} data={item} inCart={false} />)}
                </div>
            </section>
            <section>
                <h2 className="sectionLabel shopping" >Electronics</h2>
                <div className={styles.cardContainer}>{products.filter(item => item.category === "electronics").map(item => <Card key={item.id} data={item} inCart={false} />)}
                </div>
            </section>
        </>
    )
}