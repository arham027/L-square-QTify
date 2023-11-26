import React from "react";
import Styles from "../Navbar/Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/logo";
import Search from "../Search/Search";

function Navbar(){
    return(
        <nav className={Styles.navbar}>
           
                <Logo/>
           
            <Search placeholder="search a song of your choise"/>
            <Button>Give feedback</Button>
        </nav>
    )
}
export default Navbar;