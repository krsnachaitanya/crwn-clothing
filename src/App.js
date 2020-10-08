import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/signin">
            <SignInAndSignUp />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
