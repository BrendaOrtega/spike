import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './Components/About';
import Home from "./Components/Home";

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About}/>
    </Switch>
    )

export default Router;