import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SearchBar from "../SearchBar";
import {Link} from "@reach/router";

const NavBar = () => {
    return (
        <nav className={styles.navFlex}>
            <Link to="/">
                <div className={styles.navFlex}>
                    <img src={logo} alt="FoodWorm logo" />
                    <h1>MealWorm</h1>
                </div>
            </Link>
            <div className={styles.searchPanel}>
                <SearchBar placeholder="search for recipes..." />
                <Link to="/cookbook">
                    <span className={styles.faStyles}>
                        <FontAwesomeIcon icon="book-open" />
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
