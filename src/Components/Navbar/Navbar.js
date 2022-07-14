import React from "react";
import logo from "../../assets/logoTienda.jpeg"
import CartWidget from '../CartWidget/CartWidget'
import { COLORS } from "../../constants/color";
import { Link, NavLink } from "react-router-dom";
import { Margin } from "@mui/icons-material";

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const Navbar = () => {

    const categories = [
        { name: "electronica", id: 0, route: "/category/electronica" },
        { name: "joyeria", id: 1, route: "/category/joyeria" },
        { name: "ropa hombre", id: 2, route: "/category/ropa hombre" },
        { name: "ropa mujer", id: 3, route: "/category/ropa mujer" },
    ];

    return (
        <header style={styles.container}>
            <div style={styles.branchContainer}>
                <Link to="/"><img style={styles.logo} src={logo} alt="" /></Link>
            </div>
            <div style={styles.links}>
                <nav>
                    {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
                </nav>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </header >
    )
}

const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        backgroundColor: COLORS.grey,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    branchContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 25
    },
    links: {
        display: "flex"
    },
    link: {
        fontSize: 16,
        padding: 20,
        marginLeft:50
    },
    logo: {
        height: 100,
        padding: 20,
        marginLeft:100
    },
   
};

export default Navbar 
