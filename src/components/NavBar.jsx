import React from "react";
import Login from "./Login";
import {Route, Router} from 'react-router-dom';
import navbar_styles from './navbar_styles.css';


function NavBar(){
    return(<div class="n">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
   
      <a class="nav-item nav-link" href="/login">Login  </a>
      <a class="nav-item nav-link" href="/add">Add Note</a>
      <a class="nav-item nav-link" href="#">Item</a>
      <a class="nav-item nav-link disabled" href="#">Item</a>
    </div>
  </div>
</nav>
</div>);
}

export default NavBar;