import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

function MainRouter() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default MainRouter;
