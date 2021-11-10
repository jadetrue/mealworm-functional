import React from "react";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
    return (
        <>
            <div className={styles.navBar}>
                <div>
                    <img src="plate-secondary.png" alt="logo" />
                </div>
                <div>
                    <h1>MealWorm</h1>
                </div>
            </div>
        </>
    );
};

export default NavBar;
