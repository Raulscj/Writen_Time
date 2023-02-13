import React from "react";
import { Route, Switch } from "react-router-dom";
import EditPostPage from "./EditPostPage";

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/edit/:id" component={EditPostPage} />
    </Switch>
  );
}

export default AppRoutes;
