import React, { Component } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipe1 from "./Recipe1";
import Recipe2 from "./Recipe2";
 
class App extends Component {
  render() {
    return (<Router>
      <div className="header">
        <h1 style={{backgroundColor:"blue"},{textAlign:"center"}}>Recipe Book</h1>
        <Navbar />

        <Switch >
            <Route exact path='/Recipe2'>
              <Recipe2 />
            </Route>
            <Route exact path='/'>
              <Recipe1 />
            </Route>
        </Switch>
      </div>
    </Router>
       
    );
  }
}
export default App;
