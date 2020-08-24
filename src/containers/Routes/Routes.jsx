import React from "react";
import { Router } from "@reach/router";

import Dashboard from "../Dashboard";
import Cookbook from "../Cookbook";
import NotFound from "../../components/NotFound";

const Routes = (props) => {
  const { recipes } = props;

  return (
    <Router>
      <Dashboard path="/" recipes={recipes} />
      <Cookbook path="cookbook" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
