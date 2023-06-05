import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    const imgLogo = "../img/logo.png";

    return (
        <header>
            <Link to="/">
                <img id="imgLogo" src={imgLogo} alt="Logo" />
            </Link>
            <ul>
                <li>
                    <NavLink to={"/category/beers"}>Cervezas</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/distilled"}>Destilados</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/without-alcohol"}>Sin Alcohol</NavLink>
                </li>
                <li>
                    <NavLink to={"/category/wines"}>Vinos</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar
