
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route path="/snack/:id" component={Snack} />
      </Switch>
    </Router>
  );
};

export default App;
