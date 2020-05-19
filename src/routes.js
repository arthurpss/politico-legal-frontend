import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
// Import de Pages & Components
import Blog from './pages/main/Blog';
import SignIn from './pages/login/sign-in/SignIn';
import SignUp from './pages/login/sign-up/SignUp';

const createBrowserHistory = require('history').createBrowserHistory;

const history = createBrowserHistory();

const routes = [
    {
        path: "/sign-in",
        component: SignIn
    },
    {
        path: "/sign-up",
        component: SignUp
    }
]

const Routes = () => (
    <Router history={history}>
        <Switch>
            {
                routes.map(route => <Route path={route.path} component={route.component}></Route>)
            }
            <Route exact path="" component={Blog} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
        </Switch>
    </Router>
);

export default Routes;