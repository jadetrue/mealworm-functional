import React, { Component } from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <div className={styles.search}>
        <input type="text" placeholder={placeholder} />
        <span className={styles.fa}>
          <FontAwesomeIcon icon="search" />
        </span>
      </div>
    );
  }
}

export default SearchBar;
