import React, {Component} from 'react';
import App from '../app-router/App';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

export default class AppWrapper extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                </Switch>
            </BrowserRouter>
        )
    }
}

