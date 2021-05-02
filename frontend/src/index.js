import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cadastro from "./Components/Cadastro";
import Container from "./Components/Container";
import Login from "./Components/Login";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Switch>
          <Route strict exact path="/">
            <Login></Login>
          </Route>
          <Route strict exact path="/cadastro">
            <Cadastro></Cadastro>
          </Route>
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
