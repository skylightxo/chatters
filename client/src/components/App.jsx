import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./Main";
import Page from "./Page";
import LoginPage from "./LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/login">
        <Page title="Login">
          <LoginPage />
        </Page>
      </Route>
      <Route path="/">
        <Page title="Chatters">
          <Main />
        </Page>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
