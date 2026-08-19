import heroimg from "../../assets/vitaly-gariev-CizrdMZFm0g-unsplash.jpg";
import clothes from "../../assets/clothes.jpg";
import jewellery from "../../assets/jewellery.jpg";
import electronics from "../../assets/electronics.jpg";
import styles from "./Home.module.css";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";


export default function Home() {



    return (
        <>
            <div className={styles.hero}>
                <img className={styles.heroImg} src={heroimg} alt="two people outside riding in a shopping cart, laughing" srcset="" />
                <div className={styles.overlay}></div>
                <div className={styles.heroText}>
                    <p className={styles.textOnImg}>Fresh Adventures</p>
                    <p className={styles.textOnImg2}>Exciting new collection from our designers, limited availability</p>
                </div>
            </div>
            <section>
                <p>What we offer</p>
                <h2>Shop by category</h2>
                <div className={styles.cardWrapper}>
                    <CategoryCard title="clothing" img={clothes} />
                    <CategoryCard title="jewellery" img={jewellery} />
                    <CategoryCard title="electronics" img={electronics} />
                </div>
            </section>
            <section>
                <p>Why us?</p>
                <h2>Designed to spark joy and last a lifetime</h2>
            </section>
        </>)
}