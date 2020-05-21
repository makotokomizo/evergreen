import React, { Component } from 'react'
import List from './List'
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
                </Switch>
                </Router>
            </div>
        )
    }
}
