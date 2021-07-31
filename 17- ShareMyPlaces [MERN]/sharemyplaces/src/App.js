import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Users from "./user/Pages/Users";
import NewPlace from "./places/Pages/NewPlace";

import "./styles.css";

export default function App() {
  return (
    <Router>
      {/* Router needs to rap all the components related to routing */}
      <Switch>
        {/* Switch is used if we have multiple routs, it can identify each one seperately */}
        <Route path="/" exact={true}>
          {/*  Route will give the exact path */}
          <Users />
        </Route>
        <Route path="/place" exact={true}>
          <NewPlace />
        </Route>
        {/* Redirect is used to compelte the Route tag */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
