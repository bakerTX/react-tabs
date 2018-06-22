import React, { Component } from 'react';
import propTypes from 'prop-types';
import Tab from './Tab';

class TabSet extends Component {
  render() {
    const tabs = this.props.tabs;
    const renderedTabs = tabs.map((tab, index) => {
      return (
        <Tab
          chosenTab={this.props.chosenTab === index}
          label={tab}
          tabId={index}
          handleTabChange={this.props.handleTabChange}
          key={index}>
        </Tab>
      )
    });
    return (
      <div>
        { renderedTabs }
      </div>
    )
  }
}

export default TabSet;

TabSet.propTypes = {
  tabs: propTypes.arrayOf(propTypes.string).isRequired,
  chosenTab: propTypes.number.isRequired,
  handleTabChange: propTypes.func.isRequired,
}
