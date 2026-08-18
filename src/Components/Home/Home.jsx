import heroimg from "../../assets/vitaly-gariev-CizrdMZFm0g-unsplash.jpg";
import styles from "./Home.module.css";


export default function Home() {



    return (
        <>
            <div className={styles.hero}><img className={styles.heroImg} src={heroimg} alt="two people outside riding in a shopping cart, laughing" srcset="" />
                <div className={styles.heroText}>
                    <p className={styles.textOnImg}>Fresh Adventures</p>
                    <p className={styles.textOnImg2}>Exciting new collection from our designers, limited availability</p>
                </div>
            </div>
        </>)
}