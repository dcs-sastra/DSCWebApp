import React from 'react'
import {Switch, Route } from 'react-router-dom';
import Landing from '../LandingPage/Landing';


export default function Routes() {
    return (
        <Switch>
            <Route path = '/' component = {Landing} />
            <Route path = '/teams' component = {null} />
            <Route path = '/events' component = {null} />
            <Route path = '/register/:id' component = {null} />
        </Switch>
    )
}
