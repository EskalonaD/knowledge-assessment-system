import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "@containers/Header";
import Slider from "@containers/Slider";
import MainPage from "@containers/MainPage";
import Contacts from "@containers/Contacts";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    );
  }
}
