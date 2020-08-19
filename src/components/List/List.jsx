import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./List.module.scss";

const List = (props) => {
  const itemFunction = props.selectItem
    ? (item) => props.selectItem(item)
    : null;

  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={item + index} onClick={itemFunction}>
          <span>
            <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
