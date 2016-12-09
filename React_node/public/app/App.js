import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import test from './components/comment.js'

class App extends Component {

  render(){
    return(
      <div>
        <test />
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'))
