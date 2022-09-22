import { DashboardPage } from "@/pages/Dashboard";
import { HomePage } from "@/pages/Home";
import React from "react";
import { Switch, Route } from "react-router-dom";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/dashboard">
        <DashboardPage />
      </Route>
    </Switch>
  );
};
