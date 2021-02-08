import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Components/Home";

export const Router = () => (
    <Switch>
        <Route path="/" component={Home} />
    </Switch>
    )

export default Router;