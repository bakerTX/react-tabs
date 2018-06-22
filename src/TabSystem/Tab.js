import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('clicked a tab');
  }
  render() {
    return (
      <button
        onClick={this.handleClick}
      >{this.props.label}</button>
    )
  }
}

Tab.PropTypes = {
  label: PropTypes.string
}

export default Tab;
