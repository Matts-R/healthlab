import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import {
  default as Navbar,
  default as UserProfile,
} from "./Components/UserProfile";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route strict exact path="/" component={Login}></Route>
        <Navbar></Navbar>
        <Route strict exact path="/user" component={UserProfile}></Route>
        <Route strict exact path="/home" component={Home}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
