import React from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import NotFound from "../../components/NotFound";
import CreateRecipe from "../CreateRecipe";

const Routes = (props) => {
  const { recipes } = props;

  const addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .set(recipe)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <Dashboard path="/" recipes={recipes} addToCookbook={addToCookbook} />
      <Cookbook path="cookbook" />
      <CreateRecipe path="create" addToCookbook={addToCookbook} />
      <NotFound default />
    </Router>
  );
};

export default Routes;
