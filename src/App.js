// App.js or index.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
// import VlogDetailPage from './pages/VlogDetailPage';
// import UserProfilePage from './pages/UserProfilePage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Homepage} />
                {/* <Route path="/vlog/:id" component={VlogDetailPage} />
                <Route path="/user/:userId" component={UserProfilePage} />
                <Route component={NotFoundPage} /> */}
            </Routes>
        </Router>
    );
}

export default App;
