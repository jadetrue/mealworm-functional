import React from "react";
import { Router } from "@reach/router";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import NotFound from "../../components/NotFound";
import recipes from "../../data/recipes";

const Routes = (props) => {
  const {searchText} = props;

  return (
    <Router>
      <Dashboard path="/"  searchText={searchText} />
      <Cookbook path="cookbook" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
