import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class InfoPage extends Component {
  render() {
    return (
      <div>
        <div>INFO PAGE</div>
        <ul>
          {this.props.phones.map(phone => (
            <li key={`phone-${phone}`}>{phone}</li>
          ))}
        </ul>
        <Link to="/">HOME</Link>
      </div>
    );
  }
}

InfoPage.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default InfoPage;
