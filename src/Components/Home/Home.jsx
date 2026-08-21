import heroimg from "../../assets/vitaly-gariev-CizrdMZFm0g-unsplash.jpg";
import clothes from "../../assets/clothes.jpg";
import jewellery from "../../assets/jewellery.jpg";
import electronics from "../../assets/electronics.jpg";
import styles from "./Home.module.css";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import { Link } from "react-router";


export default function Home() {



    return (
        <>
            <div className={styles.hero}>
                <img className={styles.heroImg} src={heroimg} alt="two people outside riding in a shopping cart, laughing" srcset="" />
                <div className={styles.overlay}></div>
                <div className={styles.heroText}>
                    <p className={styles.textOnImg}>Adventures await</p>
                    <p className={styles.textOnImg2}>Exciting new collection from our designers,<br />limited availability.</p>
                </div>
                <Link to="shopping">explore</Link>
            </div>
            <section className="categories">
                <p className={styles.sectionLabel}>What we offer</p>
                <h2 className={styles.sectionTitle}>Shop by category</h2>
                <div className={styles.cardWrapper}>
                    <CategoryCard title="clothing" img={clothes} />
                    <CategoryCard title="jewellery" img={jewellery} />
                    <CategoryCard title="electronics" img={electronics} />
                </div>
            </section>
            <section className="whyus">
                <p className={styles.sectionLabel}>Why us?</p>
                <h2 className={styles.sectionTitle}>Designed to spark joy and last a lifetime</h2>
            </section>
        </>)
}