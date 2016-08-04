import React, { Component, PropTypes } from 'react';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
