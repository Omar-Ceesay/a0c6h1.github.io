import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import {IntlProvider, FormattedTime, FormattedDate} from 'react-intl';

import Project from "./Project";
import Comments from "./comment";

export default class Projects extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      userComment: []
    }
  }
  componentDidMount(){

    request
      .get('/api/com/comment')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if(err){
          alert('ERROR: '+err)
          return
        }
        console.log(response.body);
        let results = response.body.results
        this.setState({
          users: results
        })

      })
  }
  componentWillMount(){
    console.log('Data Sent: '+this.state.users);
  }
  filter(e){
    this.setState({filter: e.target.value})
  }
  submitComment(){
    console.log('Comment Submited '+JSON.stringify(this.state.newComment));
    let updatedList = Object.assign([], this.state.users)
    updatedList.push(this.state.newComment)

    this.setState({
      users: updatedList
    })

    request
      .post('/api/com/comment')
      .send(updatedList)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if(err){
          alert('ERROR: '+err)
          return
        }
        console.log(this.state.users);
      })
  }
  voteComment(){
    
  }
  updateUsername(event){
    let updatedComment = Object.assign({}, this.state.newComment)
    updatedComment['username'] = event.target.value
    this.setState({
      newComment: updatedComment
    })
  }
  updateComment(event){
    let updatedComment = Object.assign({}, this.state.newComment)
    updatedComment['body'] = event.target.value

    this.setState({
      newComment: updatedComment
    })
  }
  updateTimestamp(event){
    let updatedComment = Object.assign({}, this.state.newComment)
    updatedComment['timestamp'] = event.target.value

    this.setState({
      newComment: updatedComment
    })
  }
  render(){
    let users = this.state.users
    if(this.state.filter){
      users = users.filter( item => item.username.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }
    return(
      <div id="recent" id="myTable" className="col-md-12">
        <div className="container-fluid">
          <button data-toggle="collapse" data-target="#comment-collapse" className="btn btn-success">Create Comments</button>
        </div>
        <div id="comment-collapse" className="collapse">
          <div className="container-fluid form-group">
            <input className="form-control" onChange={this.updateUsername.bind(this)} autoComplete="off" type="text" name="username" placeholder="Name" required/><br/>
            <textarea className="form-control" onChange={this.updateComment.bind(this)} autoComplete="off" type="text" name="body" placeholder="Text" required/><br/>
            <button onClick={this.submitComment.bind(this)} className="btn btn-success pull-right">Submit Comment</button><br/>
          </div>
        </div>
        <div className="col-xs-2 pull-right">
          <h3>Hello World</h3>
          <h3>Test Text</h3>
        </div>
        <div className="col-xs-3 pull-left">
          <h2>I think I have a much</h2>
          <h2>I think I have a much</h2>
          <h2>I think I have a much</h2>
          <h2>I think I have a much</h2>
          <h2>I think I have a much</h2>
          <h2>I think I have a much</h2>
        </div>
        <div className="col-md-7">
            {users.map(item => <div className="panel panel-info" key={item._id}><h2 className="panel-body">{item.body}</h2><br/><h4 className="panel-heading">{item.username} | <FormattedDate value={item.timestamp}/> <FormattedTime value={item.timestamp}/></h4></div>)}
        </div>
        <footer className="footer">
          <div className="col-xs-12">
            "This is a Test Footer"
          </div>
        </footer>
      </div>
    )
  }
}
