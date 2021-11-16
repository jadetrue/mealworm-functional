import React from "react";
import styles from "./List.module.scss";

export const List = (props) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index + index}>{item}</li>
            ))}
        </ul>
    );
};

export default List;
