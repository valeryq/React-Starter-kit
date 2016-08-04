import React, { Component } from 'react';

export default state => CustomComponent => class Connect extends Component {
  render() {
    const newState = { ...this.props, ...state };
    return <CustomComponent {...newState} />;
  }
};
