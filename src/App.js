import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <Router>
      <Header />
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

export default App;
