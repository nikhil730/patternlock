import React from "react";
import SetPattern from "./components/SetPattern";
import ConfirmPattern from "./components/ConfirmPattern";
import EnternPattern from "./components/EnterPattern";
import ResetPattern from "./components/ResetPattern";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/SetPattern" />} />
        <Route path="/SetPattern" exact component={SetPattern} />
        <Route path="/ConfirmPattern" exact component={ConfirmPattern} />
        <Route path="/EnterPattern" exact component={EnternPattern} />
        <Route path="/ResetPattern" exact component={ResetPattern} />
      </Switch>
    </BrowserRouter>
  );
};
console.log("global pattern " + window.pattern);
export default App;
