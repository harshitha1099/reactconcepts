import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Recipe1 from "./components/Recipe1";
import Home from "./components/Home";
import { useState } from 'react';
import Recipe2 from "./components/Recipe2";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch >
          <Route exact path='/recipe1'>
            <Recipe1 />
          </Route>
          <Route exact path='/recipe2'>
            <Recipe2 />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
