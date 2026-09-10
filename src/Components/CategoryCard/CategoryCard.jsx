import styles from "./CategoryCard.module.css"
import { Link } from "react-router";

function CategoryCard({ title, img }) {
    return (
        <Link className={styles.card} style={{ backgroundImage: `url(${img})` }} to="shopping">{title}</Link>
    )
}

export default CategoryCard;