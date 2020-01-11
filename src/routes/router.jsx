import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from '../page/home/home.page'
import navegando from "../page/chacter/chacter.page"


export default () => {
    return <Router>
        <Switch>
            <Route path="/persona" component={navegando} ></Route>
            <Route path="/home" component={HomePage} ></Route>

            <Route path="/*" component={HomePage} ></Route>

        </Switch>

    </Router>
}