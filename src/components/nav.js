import logo from '../assets/imagenlogo1.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
        <header>
            <img src={logo} alt="" className='App-logo' />
            <h1></h1>
            <nav className='index__navegacion'>
                <a href="">Cat1</a>
                <a href="">Cat2</a>
                <a href="">Cat3</a>
                <a href="">Cat4</a>
            </nav>
            <ShoppingCartIcon />
        </header>
    )
}

export default NavBar;