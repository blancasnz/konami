import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {
  constructor() {
    super();

    this.popUp = this.popUp.bind(this)
  }
  //something is going to happen right when it renders
  //Moustrap detects key commands
  componentDidMount() {
    //key commands that are binded to object
    Mousetrap.bind(['1 2 3 4', 'up up down down left right left right b a'], this.popUp)
  }
  //something is going to happen when it goes away
  componentWillUnmount() {
    Mousetrap.unbind(['1 2 3 4', 'up up down down left right left right b a'])
  }

  popUp() {
    alert(`The Konami code happened ${this.props.name.length > 1 ? `, ${this.props.name} !` : `!`}`)
  }

  render() {
    return (
      <div>
        Konami Code : Activated
</div>
    );
  }
}

export default Konami;
