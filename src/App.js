import './App.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

function App() {
  return (

    <div>
      <h1>🌸°•* SIMPLE SPA *•°🌸</h1>
      <ul className="header">
        <li><a href="/">Home</a></li>
        <li><a href="/stuff">Stuff</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <p><strong>Summary from REACT PDA:</strong><br></br> <br></br>According to the article, React is one of the most popular and quickly growing single page application development frameworks. The reason for React's popularity is because of the way it solves the problems we had with traditional
        single page application development frameworks, starting with state management.
        React will figure out what needs to be updated and it will do it automatically for programmers. Therefore, it isn't necessary
        to keep track of the state management anymore. In traditional SPA, single page applications, the DOM manipulation is
        time consuming. So it needs a lot of effort to change the DOM or update the DOM.
      </p>
      <p><strong>What I like about the class:</strong><br></br><br></br>I enjoy creating and designing for the mini web-programming projects we have in this class.</p>
      <br></br><br></br>
      <br></br>
      <strong>Content on Pages:</strong><br></br><br></br>
      <h1><strong>- ❀ Home ❀ -</strong></h1>
      <h3><strong>⌂</strong></h3>
      <br></br>
      <Home></Home>
      <br></br>
      <h1><strong>- ❀ Stuff ❀ -</strong></h1>
      <h3><strong>♥</strong></h3>
      <br></br>
      <Stuff></Stuff>
      <br></br>
      <h1><strong>- ❀ Contact ❀ -</strong></h1>
      <h3><strong>☏</strong></h3>
      <br></br>
      <Contact></Contact>
    </div >

  );
}

export default App;
