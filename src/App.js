import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/welcome/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import PageError from "./components/pageerror/PageError";

class App extends Component {
  render() {
    return (
      <div className="heading">
        <div className="header">
        {/* define our routes */}
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Kamal" />}
          />
          <Route
            path="/welcome/:name"
            render={(props) => <Welcome name={props.match.params.name} />}
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route>
            <PageError/>
           
          </Route>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;