import React, { Component } from 'react';

import Project from "./Project";

export default class Projects extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    fetch('/api/com/comment')
      .then( response => response.json())
      .then( ({results: items}) => this.setState({items}))
  }
  render(){
    let items = this.state.items
    return(
      <div className="container">
        <h1>Projects project={this.props.params.project/*THIS IS LINKED TO path="projects(/:project)"*/}</h1>
      </div>
    )
  }
}
