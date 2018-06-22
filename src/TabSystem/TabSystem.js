import React, { Component } from 'react';
import propTypes from 'prop-types';
import TabSet from './TabSet';
import Tab from './Tab';
import ContentSet from './ContentSet';

export default class TabSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenTab: props.initialChosenTab,
    }
    this.handleTabChange = this.handleTabChange.bind(this);
  }
  handleTabChange(newTabId) {
    this.setState({
      chosenTab: newTabId
    })
  }
  render() {
    const tabs = this.props.tabs;
    const renderedTabs = tabs.map((tab, index) => {
      return (
        <Tab
          chosenTab={this.state.chosenTab === index}
          label={tab}
          tabId={index}
          handleTabChange={this.handleTabChange}
          key={index}>
        </Tab>
      )
    });
    return (
      <div>
        <TabSet>
          {renderedTabs}
        </TabSet>
        <ContentSet>
          {this.props.children[this.state.chosenTab]}
        </ContentSet>
      </div>
    )
  }
}

TabSystem.propTypes = {
  initialChosenTab: propTypes.number.isRequired,
  tabs: propTypes.arrayOf(propTypes.string).isRequired,
}
