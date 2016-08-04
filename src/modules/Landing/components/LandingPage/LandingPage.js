import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>LANDING PAGE</div>
        <div>Hello, {this.props.name}</div>
        <Link to="/info">INFO</Link>
      </div>
    );
  }
}

LandingPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default LandingPage;
