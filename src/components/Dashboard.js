import React, { Component } from 'react'
import List from './List'
import ListUse from './ListUse'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <p>Dashboard</p>
                <Router>
                <Switch>
                <Route exact path="/list" component={List} />
                <Route exact path="/listuse" component={ListUse} />
                </Switch>
                </Router>
            </div>
        )
    }
}
