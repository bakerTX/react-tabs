import React, { Component } from 'react';
import propTypes from 'prop-types';
import TabSet from './TabSet';
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
    return (
      <div>
        <TabSet tabs={this.props.tabNames} chosenTab={this.state.chosenTab} handleTabChange={this.handleTabChange}></TabSet>
        <ContentSet>
          {this.props.children[this.state.chosenTab]}
        </ContentSet>
      </div>
    )
  }
}

TabSystem.propTypes = {
  initialChosenTab: propTypes.number.isRequired,
  tabNames: propTypes.arrayOf(propTypes.string).isRequired,
}
