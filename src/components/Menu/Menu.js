import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
const Menus = [
  {
    name: "Home",
    path: "/",
    exact: true,
  },
  {
    name: "Manager Products",
    path: "/productlist",
    exact: false,
  },
  {
    name: "Login",
    path: "/login",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "activehdt" : "";
        return (
          <li className={`my-link ${active}`}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};
class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="sds">CallAPI</a>
            </div>
            <ul className="nav navbar-nav">{this.showMenus(Menus)}</ul>
          </div>
        </nav>
      </div>
    );
  }
  showMenus = Menus => {
    var result = "";
    if (Menus) {
      result = Menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.path}
            activeOnlyWhenExact={menu.exact}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}

export default Menu;
