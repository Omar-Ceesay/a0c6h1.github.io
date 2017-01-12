import React, { Component } from 'react'

export default class Zone extends Component {
  render(){
    return(
      <div className="container">
        <h1>Create Zone</h1>
        <form action="/api/zone" method="post">
          <input autoComplete="off" type="text" name="name" placeholder="Name"/><br/>
          <input autoComplete="off" type="text" name="zipCodes" placeholder="Zip Code(s)" /><br/>
          <input type="submit" name="" value="Create Zone" />
        </form>
      </div>

    )
  }
}
