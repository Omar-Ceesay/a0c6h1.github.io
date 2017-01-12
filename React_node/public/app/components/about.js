import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import numeral from 'numeral';

export default class About extends Component {
  constructor(){
    super();
    this.state = {val: .01, cur: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + this.state.val});
    this.setState({cur: this.state.cur + 1});
  }
  componentWillMount(){
    console.log('compoentWillMount');
    this.setState({m: 2});
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  startInterval(){
    this.inc = setInterval(this.update ,500);
    console.log(this.inc);
    console.log('Interval Started');
    this.setState({val: .01});
    this.setState({cur: 0});
  }
  stopInterval(){
    clearInterval(this.inc);
    console.log(this.inc);
    console.log('Interval Cleared');
  }
  render(){
    return(
      <div className="container">
        <h1>About</h1>
        <button onClick={this.update}>${this.state.val} Day: {this.state.cur}</button>
        <div>
          <button onClick={this.startInterval.bind(this)}>Start</button>
          <button onClick={this.stopInterval.bind(this)}>Stop</button>
          <div id='a'></div>
        </div>
      </div>
    )
  }
}
