import React, { Component } from 'react'

import Zone from './zone.js'

export default class Comments extends Component {

  submitComment(){

  }

  render(){
    return(
      <div className="container">
        <h1>Create Comments</h1>
          <form action="/api/com/comment" method="post" className="">
            <input type="text" name="username" placeholder="Name"/><br/>
            <input autoComplete="off" type="text" name="body" placeholder="Text" /><br/>
            <input type="submit" name="" value="Create Comment" />
          </form>
      </div>
    )
  }
}
