import React, { Component } from 'react'

class test extends Component {
  render(){
    return(
      <div class="container">
        <h1>Create Comments</h1>
        <form action="/api/com/comment" method="post" class="container">
          <input type="text" name="username" placeholder="Name"/><br/>
          <input autocomplete="off" type="text" name="body" placeholder="Text" /><br/>
          <input type="submit" name="" value="Create Comment" />
        </form>

      </div>
    )
  }
}

export default test
