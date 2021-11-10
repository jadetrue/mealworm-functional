import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
    const {strMeal, strMealThumb, strArea, strSource, strYoutube} = props.data;

    return (
        <div className={styles.cardFront}>
            <img src={strMealThumb} alt="Thai Green Curry" />
            <section className={styles.recipeDetails}>
                <h2>{strMeal}</h2>
                <p>
                    <span>{strArea}</span>
                </p>
                <div className={styles.links}>
                    <a
                        href={strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Full recipe
                    </a>
                    <a
                        href={strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Youtube
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CardFront;
