import React, { useContext } from "react";
import styles from "./Cookbook.module.scss";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";
import { CrudContext } from "../../context/crudContext";

const Cookbook = () => {
  const crudContext = useContext(CrudContext);
  const { favourites } = crudContext;

  const contentJsx = favourites.length ? (
    <CardList recipes={favourites} />
  ) : (
    <FeedbackPanel
      header="No favourites"
      text="Try returning to dahsboard and searching for your meal of choice"
    />
  );

  return <section className={styles.cookbook}>{contentJsx}</section>;
};

export default Cookbook;
