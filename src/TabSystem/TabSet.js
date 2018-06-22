import React, { Component } from 'react';

class TabSet extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TabSet;
