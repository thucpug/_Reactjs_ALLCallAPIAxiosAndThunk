import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routers/routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Menu></Menu>

        <div className="container">
          <div className="row">{this.showContentsMenu(routes)}</div>
        </div>
      </Router>
    );
  }
  showContentsMenu = routes => {
    var result = null;
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        ></Route>
      );
    });
    return <Switch>{result}</Switch>;
  };
}

export default App;
