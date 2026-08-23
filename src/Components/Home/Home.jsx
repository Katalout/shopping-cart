import heroimg from "../../assets/vitaly-gariev-CizrdMZFm0g-unsplash.jpg";
import clothes from "../../assets/clothes.jpg";
import jewellery from "../../assets/jewellery.jpg";
import electronics from "../../assets/electronics.jpg";
import styles from "./Home.module.css";
import diamond from "../../assets/diamond.svg";
import shield from "../../assets/shield.svg";
import star from "../../assets/star.svg";
import approval from "../../assets/approval.svg";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import { Link } from "react-router";


export default function Home() {

    console.log(star);

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
                <h2 className={styles.sectionTitle}>Designed to spark joy and last a lifetime.</h2>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
                        <img src={diamond} alt="" />
                        <h3>Finest materials</h3>
                        <p>Our products are made locally, from carefully selected and tested materials. Any returns are also recycled to reduce waste.</p>
                    </div>
                    <div className={styles.card} >
                        <img src={star} alt="" />
                        <h3>Honest reviews</h3>
                        <p>Every review is from a confirmed purchase. We pride ourselves in the satisfaction of our customers.</p>
                    </div>
                    <div className={styles.card}>
                        <img src={approval} alt="" />
                        <h3>Transparent return policy</h3>
                        <p>Should you have any concern, please reach our to customer service. We will find the best solution, be it replacement or repair.</p>
                    </div>
                    <div className={styles.card}>
                        <img src={shield} alt="" />
                        <h3>Warranty for life</h3>
                        <p>The quality speaks for itself. We make products to last, so everything is repairable, every part is replaceable.</p>
                    </div>
                </div>

            </section>
            <section className="support">
                <ul><h3>About Brand</h3>
                    <li>Our Mission</li>
                    <li>Sustainability</li>
                </ul>
                <ul><h3>Support</h3>
                    <li>FAQ</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Warranty</li>
                </ul>
                <ul><h3>Contact</h3>
                    <li>support@brand.com</li>
                    <li>+1 23 45 678</li>
                    <li>10 Street square, City</li>
                    <li>Monday - Friday, 9:00 - 17:00</li>
                </ul>
            </section>
        </>)
}