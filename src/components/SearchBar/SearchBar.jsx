import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  const { placeholder } = props;
  return (
    <div className={styles.search}>
      <input type="text" placeholder={placeholder} />
      <span className={styles.fa}>
        <FontAwesomeIcon icon="search" />
      </span>
    </div>
  );
};

export default SearchBar;
