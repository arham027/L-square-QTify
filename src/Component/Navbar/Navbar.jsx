import React from "react";
import Styles from "../Navbar/Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/logo";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className={Styles.navbar}>
           <Link to={"/"}>
                <Logo/>
                </Link>
            <Search placeholder="search a song of your choise"/>
            <Button>Give Feedback</Button>
        </nav>
    )
}
export default Navbar;