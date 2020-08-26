import React, { useContext } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/plate-secondary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import SearchBar from "../SearchBar";
import { UserContext } from "../../context/userContext";
import { RecipeContext } from "../../context/recipeContext";

const NavBar = () => {
  const userContext = useContext(UserContext);
  const recipeContext = useContext(RecipeContext);
  const { signIn, signOut, user } = userContext;
  const { grabRecipes } = recipeContext;

  const getSignInOutJsx = () => {
    return user ? (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={"sign-out-alt"} onClick={signOut} />
      </span>
    ) : (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
      </span>
    );
  };

  return (
    <nav className={styles.navFlex}>
      <Link to="/">
        <div className={styles.navFlex}>
          <img src={logo} alt="FoodWorm logo" />
          <h1>MealWorm</h1>
        </div>
      </Link>
      <div className={styles.searchPanel}>
        <SearchBar
          placeholder="Search for recipes..."
          updateSearchText={grabRecipes}
        />
        <span className={styles.faStyles}>
          <Link to="create">
            <FontAwesomeIcon icon="plus-square" />
          </Link>
        </span>
        <span className={styles.faStyles}>
          <Link to="cookbook">
            <FontAwesomeIcon icon="book-open" />
          </Link>
        </span>
        {getSignInOutJsx()}
      </div>
    </nav>
  );
};

export default NavBar;
