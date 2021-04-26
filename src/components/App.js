import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      // eslint-disable-next-line react/no-unused-state
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operate: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (btnName) => {
    console.log(btnName);
    this.setState((state) => calculate(state, btnName));
    // return this.setState((state) => { console.log(calculate(state, btnName)); });
  };

  render() {
    const { total } = this.state;
    return (
      <>
        <Display value={total} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}

export default App;
