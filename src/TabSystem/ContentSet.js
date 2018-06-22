import React, { Component } from 'react';

export default class ContentSet extends Component {
  constructor(props) {
    super(props);
    console.log(props.initialChosenTab);
    this.state = {
      chosenTab: props.initialChosenTab
    }
  }
  render() {
    return (
      <div>
        {this.props.children[this.state.chosenTab]}
      </div>
    )
  }
}
