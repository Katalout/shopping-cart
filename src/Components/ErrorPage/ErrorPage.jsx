import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

function ErrorPage({ error }) {
    if (error === "404")
        return (
            <div className={styles.wrapper}>
                <span className={styles.label}>404</span>
                <h1>Page not found</h1>
                <p>The page you are looking for does not exist or may have been moved.</p>
                <Link to="/">Back to home</Link>
            </div>
        )
    else if (error === "loading err") return (

        <div className={styles.wrapper}>
            <span className={styles.label}>loading error</span>
            <h2>Apologies</h2>
            <p>The products can not be loaded at the moment.</p>
            <Link to="/">Back to home</Link>
        </div>)

    else return (
        <div className={styles.wrapper}>
            <span className={styles.label}>just a moment</span>
            <h1>Loading products...</h1>
        </div>
    )
}

export default ErrorPage;