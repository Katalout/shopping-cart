import styles from "./Shopping.module.css";
import { useOutletContext } from "react-router";
import Card from "../Card/Card";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function Shopping() {
    const { products, error, loading } = useOutletContext();

    if (loading) return (
        <ErrorPage error="loading prod" />
    )
    if (error) return (
        <ErrorPage error="loading err" />
    )

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