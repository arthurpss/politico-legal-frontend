import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import de Pages & Components
import Blog from "./pages/main/Blog";
import SignIn from "./pages/login/sign-in/SignIn";
import SignUp from "./pages/login/sign-up/SignUp";
import Album from "./pages/album/Album";

const routes = [
  {
    key: "index",
    path: "/",
    component: Blog,
    exact: true,
  },
  {
    key: "login",
    path: "/login",
    component: SignIn,
    exact: false,
  },
  {
    key: "cadastro",
    path: "/cadastro",
    component: SignUp,
    exact: false,
  },
  {
    key: "noticias",
    path: "/noticias",
    component: Album,
    exact: false,
  },
  {
    key: "portifolio",
    path: "/portifolio",
    component: Album,
    exact: false,
  },
];

export default function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            component={route.component}
            exact={route.exact}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
}
