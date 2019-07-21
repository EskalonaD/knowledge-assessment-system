import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./globalStyles/index.css";

import Header from "@containers/Header";
import Slider from "@containers/Slider";
import MainPage from "@containers/MainPage";
import Tests from "@containers/Tests";
import Contacts from "@containers/Contacts";
import Footer from "@containers/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/tests" component={Tests} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
