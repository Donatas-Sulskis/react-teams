import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

const Routes = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/*" component={Register}></Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
