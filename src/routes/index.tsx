import { HomePage } from "@/pages/Home";
import React from "react";
import { Switch, Route } from "react-router-dom";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" render={HomePage} />
      <Route exact path="/dashboard" />
    </Switch>
  );
};
