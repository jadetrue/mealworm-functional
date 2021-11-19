import React, {useState} from "react";
import CardFront from "../CardFront";
import CardBack from "../CardBack";
import styles from "./Card.module.scss";

export const Card = (props) => {
    const [isFaceDown, setIsFaceDown] = useState(false);
    const {recipe} = props;

    const flipStyles = isFaceDown ? styles.faceDown : "";

    return (
        <>
            <section
                className={`${styles.recipeCard} ${flipStyles}`}
                onClick={() => setIsFaceDown(!isFaceDown)}
            >
                <div className={styles.front}>
                    <CardFront recipe={recipe} />
                </div>
                <div className={styles.back}>
                    <CardBack recipe={recipe} />
                </div>
            </section>
        </>
    );
};

export default Card;
