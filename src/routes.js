import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Import de Pages & Components
import Blog from './pages/main/Blog'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="" component={Blog} />
        </Switch>
    </Router>
);

export default Routes;