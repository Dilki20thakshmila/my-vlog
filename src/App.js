// App.js or index.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
// import VlogDetailPage from './pages/VlogDetailPage';
// import UserProfilePage from './pages/UserProfilePage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                {/* <Route path="/vlog/:id" component={VlogDetailPage} />
                <Route path="/user/:userId" component={UserProfilePage} />
                <Route component={NotFoundPage} /> */}
            </Switch>
        </Router>
    );
}

export default App;
