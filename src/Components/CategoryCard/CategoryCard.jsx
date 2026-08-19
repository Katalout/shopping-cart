import styles from "./CategoryCard.module.css"

function CategoryCard({ title, img }) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={img} alt="" />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.overlay}></div>
        </div>
    )
}

export default CategoryCard;