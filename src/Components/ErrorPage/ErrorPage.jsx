import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
    return (
        <div className={styles.wrapper}>
            <span className={styles.label}>404</span>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist or may have been moved.</p>
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default ErrorPage;