import React, { Component } from 'react';
import { Link } from 'react-router';
import s from './styles.css';

class Header extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <ul className={s.navLinks}>
          <li>
            <Link to="/" className={s.navLink} activeClassName={s.navLinkActive} onlyActiveOnIndex>HOME</Link>
          </li>
          <li>
            <Link to="/info" className={s.navLink} activeClassName={s.navLinkActive} onlyActiveOnIndex>INFO</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
