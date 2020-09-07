import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useLocation,
  NavLink,
  Redirect
} from "react-router-dom";

function App() {
  console.log(window.location.pathname[3])
  return (
    <Router>
            <div>

    <nav>
      <ul>
        <li><img src="https://cdn.discordapp.com/attachments/749403098413531148/750367413534720040/HTSEarth_logo_wb_lighter.png" alt="logo" height="55" style={{padding: '0 1em'}}/></li>
        <li><NavLink to="/home" aria-current={window.location.pathname === '/home' ? "page" : undefined} activeClassName="c">Home</NavLink></li>
        <li><NavLink to="/contact" aria-current={window.location.pathname === '/contact' ? "page" : undefined} activeClassName="c">Contact</NavLink></li>
        <li><NavLink to="/community" aria-current={window.location.pathname === '/community' ? "page" : undefined} activeClassName="c">Community</NavLink></li>
      </ul>
    </nav>
    <Switch>
          <Route path="/contact">
            <p>about</p>
          </Route>
          <Route path="/community">
          <p>topics</p>
          <p>topics</p>
          <p>topics</p>
          <p>topics</p>
          <p>topics</p>

          </Route>
          <Route path="/home">
          <p>home</p>
          </Route>
          <Redirect from="/" to ="home"></Redirect>
        </Switch>
      </div>

      </Router>
  );
}

export default App;
