import React, { useState } from "react";
import styles from "./CreateRecipe.module.scss";

const emptyRecipe = {
  name: "",
  id: "",
  instructions: "",
  ingredients: "",
  tags: "",
  source: "",
  youtube: "",
  category: "",
  area: "",
  thumbnail: "",
};

const CreateRecipe = (props) => {
  const [recipe, setRecipe] = useState(emptyRecipe);
  const { addToCookbook } = props;

  const {
    name,
    id,
    area,
    instructions,
    ingredients,
    tags,
    category,
    youtube,
    source,
    thumbnail,
  } = recipe;

  const handleChange = (e) => {
    const name = e.target.name;
    setRecipe({ ...recipe, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedRecipe = cleanFormValues(recipe);
    addToCookbook(cleanedRecipe);
    alert("Recipe added");
    clearForm();
  };

  const cleanFormValues = (formValues) => {
    const cleanIngredients = formValues.ingredients.split(",");
    const cleanTags = formValues.tags.split(",");
    formValues.ingredients = cleanIngredients;
    formValues.tags = cleanTags;
    formValues.isFav = true;
    return formValues;
  };

  const clearForm = () => {
    setRecipe(emptyRecipe);
  };

  const checkFormCompleted = () => {
    let isCompleted = true;
    for (const field in recipe) {
      if (recipe[field] === "") isCompleted = false;
    }
    return isCompleted;
  };

  return (
    <section className={styles.crudForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formBlock}>
          <input
            type="text"
            name="name"
            placeholder="What's the recipe name?"
            autoFocus={true}
            value={name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="id"
            placeholder="Give the recipe a unique id"
            value={id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="What category does the recipe come under e.g. desert, thai ?"
            value={category}
            onChange={handleChange}
          />
          <input
            type="text"
            name="area"
            placeholder="What region of the world is the recipe from?"
            value={area}
            onChange={handleChange}
          />
          <input
            type="text"
            name="source"
            placeholder="What's the href for the source of this recipe"
            value={source}
            onChange={handleChange}
          />
          <input
            type="text"
            name="youtube"
            placeholder="What's the href for the youtube link to this recipe?"
            value={youtube}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formBlock}>
          <textarea
            name="instructions"
            rows="5"
            placeholder="What're the instructions for creating the meal?"
            value={instructions}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="thumbnail"
            placeholder="The href for the recipe image"
            value={thumbnail}
            onChange={handleChange}
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags seperated by commas e.g. comfort food,winter staple"
            value={tags}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ingredients"
            placeholder="Ingredients seperated by commas e.g. bread,butter,peanut butter"
            value={ingredients}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Submit"
            className={`${styles.submitButton}`}
            onChange={handleChange}
            disabled={!checkFormCompleted()}
          />
        </div>
      </form>
    </section>
  );
};

export default CreateRecipe;
