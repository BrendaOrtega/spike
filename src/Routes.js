import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './Components/About';
import Home from "./Components/Home";
import Event from "./Components/Event"
import Specs from './Components/Specs';
import SetUp from './Components/SetUp';
import News from "./Components/News"
import Contact from './Components/Contact';

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/specs" component={Specs} />
        <Route path="/setup" component={SetUp} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route path="/spike-stinger-academy" component={Event} />
    </Switch>
)

export default Router;