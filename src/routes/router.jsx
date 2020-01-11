import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from '../page/home/home.page'



export default () => {
    return <Router>
        <Switch>
            <Route path="/" component={HomePage} ></Route>
        </Switch>

    </Router>
}