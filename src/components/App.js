import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operate: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
