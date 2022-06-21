import logo from '../assets/imagenlogo1.jpg';
import './nav.css';
import CartWidget from './CartWidget';

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