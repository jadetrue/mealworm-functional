import React from "react";
import {Router} from "@reach/router";
import NotFound from "../../components/NotFound";
import Dashboard from "../Dashboard/Dashboard";
import Cookbook from "../Cookbook/Cookbook";

const Routes = () => {
    return (
        <Router>
            <Dashboard path="/" />
            <Cookbook path="/cookbook" />
            <NotFound default />
        </Router>
    );
};

export default Routes;
