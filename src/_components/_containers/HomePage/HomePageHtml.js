import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHome from '../MainHome/MainHome';
// import { Header } from '../Header/Header';

function HomePageHtml(props) {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MainHome} />
            </Switch>
        </Router>
    );
}

export default HomePageHtml;