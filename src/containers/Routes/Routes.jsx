import React from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import NotFound from "../../components/NotFound";
import CreateRecipe from "../CreateRecipe";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = (props) => {
  const { recipes } = props;

  return (
    <Router>
      <Dashboard path="/" recipes={recipes} />
      <PrivateRoutes path="/">
        <Cookbook path="cookbook" />
        <CreateRecipe path="create" />
      </PrivateRoutes>
      <NotFound default />
    </Router>
  );
};

export default Routes;
