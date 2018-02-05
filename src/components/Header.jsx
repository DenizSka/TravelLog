import React from 'react';

import { Link } from 'react-router-dom';

const Header = props => (
  <header>
    <h1 className="App-title"> TRAVEL🌏G</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">Add Landmark</Link></li>
        <li><span className="logout" onClick={props.logout}>Logout</span></li>
      </ul>
    </nav>
  </header>
);

export default Header;
