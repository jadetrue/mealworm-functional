import React from "react";

const CardFront = () => {
  return (
    <div className={styles.cardFront}>
      <img
        src="https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg"
        alt="Thai Green Curry"
      />
      <section className={styles.recipeDetails}>
        <h2>Thai Green Curry</h2>
        <p>
          <span>Thai</span>
        </p>
        <div className={styles.links}>
          <a href="" target="_blank" rel="noopener noreferrer">
            Full recipe
          </a>
          <a
            href="https://www.youtube.com/watch?v=LIbKVpBQKJI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </div>
      </section>
    </div>
  )
};

export default CardFront;
