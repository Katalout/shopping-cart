import search from "../../assets/search.png";
import { Link } from "react-router";


function Header() {
    return (
        <header>
            <h1><Link to="/">Online Shop</Link></h1><img src={search} alt="search" />
        </header>
    )

};

export default Header