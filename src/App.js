import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./globalStyles/index.css";

import Header from "@containers/Header";
import Slider from "@containers/Slider";
import MainPage from "@containers/MainPage";
import Tests from "@containers/Tests";
import Contacts from "@containers/Contacts";
import Statistics from "@containers/Statistics";
import Footer from "@containers/Footer";
import About from "@containers/About"
import Login from "@containers/Login"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/tests" component={Tests} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
