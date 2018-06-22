import React, { Component } from 'react';
import propTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const tabId = this.props.tabId;
    this.props.handleTabChange(tabId);
  }
  render() {
    const selected = this.props.chosenTab;
    return (
      <button
        onClick={this.handleClick}
        style={{
          fontWeight: selected ? 'bold' : 'normal'
        }}
      >{this.props.label}</button>
    )
  }
}

Tab.propTypes = {
  label: propTypes.string
}

export default Tab;
