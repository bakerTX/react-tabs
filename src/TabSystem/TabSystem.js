import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenTab: props.initialChosenTab,
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

TabSystem.PropTypes = {
  initialChosenTab: PropTypes.number.isRequired
}
