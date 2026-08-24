import heroimg from "../../assets/vitaly-gariev-CizrdMZFm0g-unsplash.jpg";
import clothes from "../../assets/clothes.jpg";
import jewellery from "../../assets/jewellery.jpg";
import electronics from "../../assets/electronics.jpg";
import styles from "./Home.module.css";
import diamond from "../../assets/diamond.svg";
import shield from "../../assets/shield.svg";
import star from "../../assets/star.svg";
import approval from "../../assets/approval.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg";
import clock from "../../assets/clock.svg";
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
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>support@brand.com</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>+1 23 45 678</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>10 Street square, City</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>Monday - Friday, 9:00 - 17:00</li>
                </ul>
            </section>
        </>)
}