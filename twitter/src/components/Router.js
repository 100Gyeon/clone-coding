import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Navigation from "components/Navigation"

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            {/* 아래는 그 외의 route로 가게 되면 "/"로 돌아가라는 의미 */}
            {/* <Redirect from="*" to ="/" /> */}
          </>
        ) : (
          <>
            <Route exact path="/">
              {" "}
              <Auth />
            </Route>
            <Redirect from="*" to ="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;