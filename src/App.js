import React, { Component } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Cart from "./Components/Cart/Cart";
import Default from "./Components/Default";
import ProductList from "./Components/ProductList";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Components/Modal";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </>
    );
  }
}
export default App;
