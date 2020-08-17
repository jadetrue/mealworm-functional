import React from "react";
import styles from "./List.module.scss";

const List = (props) => {
  const itemFunction = props.selectItem
    ? (item) => props.selectItem(item)
    : null;

  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={item + index} onClick={itemFunction}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
