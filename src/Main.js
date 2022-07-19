import React, { Component } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';


class Main extends Component {
    render() {
        return (
            <div>
                <h1>Simple SPA - Single Page App</h1>

                <ul className="header">
                    <li><a href="/">Home</a></li>
                    <li><a href="/stuff">Stuff</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="content">

                </div>
            </div>

        );
    }
}

export default Main;