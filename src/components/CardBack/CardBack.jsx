import React from "react";
import styles from "./CardBack.module.scss";

export const CardBack = () => {
    const title = "Thai Green Curry";
    const ingredients = ["potatoes", "green beans", "sunflower oil"];
    const instructions =
        "Put the potatoes in a pan of boiling water and cook for 5 minutes. Throw in the beans and cook for a further 3 minutes, by which time both should be just tender but not too soft. Drain and put to one side.\r\nIn a wok or large frying pan, heat the oil until very hot, then drop in the garlic and cook until golden, this should take only a few seconds. Don’t let it go very dark or it will spoil the taste. Spoon in the curry paste and stir it around for a few seconds to begin to cook the spices and release all the flavours. Next, pour in the coconut milk and let it come to a bubble.\r\nStir in the fish sauce and sugar, then the pieces of chicken. Turn the heat down to a simmer and cook, covered, for about 8 minutes until the chicken is cooked.\r\nTip in the potatoes and beans and let them warm through in the hot coconut milk, then add a lovely citrussy flavour by stirring in the shredded lime leaves (or lime zest). The basil leaves go in next, but only leave them briefly on the heat or they will quickly lose their brightness. Scatter with the lime garnish and serve immediately with boiled rice.";

    return (
        <div className={styles.cardBack}>
            <h2>{title}</h2>
            <h3>Instructions</h3>
            <p>{instructions.slice(0, 199) + `...`}</p>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient) => (
                <p>{ingredient}</p>
            ))}
        </div>
    );
};

export default CardBack;
