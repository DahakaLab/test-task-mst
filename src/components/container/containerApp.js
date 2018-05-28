import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutComplex from "./aboutComplex/AboutComplex";
import NotFound from "./notFound/notfound";

export default class ContainerApp extends Component {
    render(){
        return(
            <div className="container grid">
                <Switch>
                    <Route exact path="/" component={AboutComplex}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        )
    }
}