import logo from '../assets/imagenlogo1.jpg';
import './nav.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom"

/* 
const NavBar = () => {
    return (
        <header>
            <img src={logo} alt=""  />
            <h1>Frutos Secos</h1>
            <nav>
                <a href="">Cat1</a>
                <a href="">Cat2</a>
                <a href="">Cat3</a>
                <a href="">Cat4</a>
            </nav>
            < CartWidget />
        </header>
    )
}

export default NavBar;
 */

const NavBar = () => {

    const categories = [
        { name: "Productos", id: 0, route: "/category/productos"},
        { name: "Nosotros", id: 1, route: "/category/nosotros"},
        { name: "Local", id: 2, route: "/category/local"},
        { name: "Contacto", id: 3, route: "/category/contacto"},
    ];

    return (
        <header>
            <Link to="/"><img src={logo} alt=""  /></Link>
            <h1>Frutos Secos</h1>
            <nav>
                {categories.map((category) => <Link key={category.id} to={category.route}>{category.name}</Link>)}
            </nav>
            <Link to="/cart">< CartWidget /></Link>
        </header>
    )
}

export default NavBar;
