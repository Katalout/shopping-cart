import styles from "./CategoryCard.module.css"
import { Link } from "react-router";

function CategoryCard({ title, img }) {
    return (
        <Link preventScrollReset={false} className={styles.card} style={{ backgroundImage: `url(${img})` }} to={`shopping/${title}`}>{title}</Link>
    )
}

export default CategoryCard;