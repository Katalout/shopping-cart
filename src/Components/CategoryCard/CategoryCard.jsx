import styles from "./CategoryCard.module.css"

function CategoryCard({ title, img }) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>{title}
            {/* <img className={styles.cardImg} src={img} alt="" /> */}
            {/* <h3 className={styles.title}></h3> */}
            {/* <div className={styles.overlay}></div> */}
        </div>
    )
}

export default CategoryCard;