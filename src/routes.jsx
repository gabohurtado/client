import React from 'react';
import {  Route, Switch } from 'react-router-dom'

// Components
import homeComponent from './components/home/home.component';
import App from './App';
import itemDetailsComponent from './components/item-details/item-details.component';
// import homeComponent from './components/home/home-component';

export default (
    <Switch>
        <Route path="/" component={App} exact />
        <Route path="/search" component={homeComponent} />
        <Route path="/item/:id" component={itemDetailsComponent} exact />
    </Switch>
)