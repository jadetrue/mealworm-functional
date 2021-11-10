import React from "react";
import styles from "./CardFront.module.scss";

export const CardFront = () => {
    return (
        <div className={styles.cardFront}>
            <img src="thai-green-curry.jpg" alt="Thai Green Curry" />
            <section className={styles.recipeDetails}>
                <h2>Thai Green Curry</h2>
                <p>
                    <span>Thai</span>
                </p>
                <div className={styles.links}>
                    <a href="">Full recipe</a>
                    <a href="">Youtube</a>
                </div>
            </section>
        </div>
    );
};
