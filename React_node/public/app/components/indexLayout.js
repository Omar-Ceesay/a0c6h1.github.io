import React, { Component } from 'react'
import { Link } from "react-router";

import Zone from './zone.js'

export default class Layout extends Component {
  render(){
    console.log();


    return(
      <div className="container-fluid" id="stay">
        <div className="container" id="heading">
          <h1 id="title"><mongo id="mongodb"><strong>M</strong>ongoDB</mongo> <strong>E</strong>xpress <react id="react"><strong>R</strong>eact</react> <node id="node"><strong>N</strong>ode</node></h1>
        </div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebsiteName</a>
            </div>
            <ul className="nav nav-tabs">
              <li><Link activeClassName="activeLink" to="/">Home</Link></li>
              <li><Link activeClassName="activeLink" to="create">Create</Link></li>
              <li><Link activeClassName="activeLink" to="projects">Projects</Link></li>
              <li><Link activeClassName="activeLink" to="about">About</Link></li>
              <li><Link activeClassName="activeLink" to="commentFeed">Comments</Link></li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid test"></div>
        <div className="">
          {this.props.children}
        </div>
        <script rel='stylesheet' src='../../javascripts/jq.js' ></script>
      </div>
    )
  }
}
