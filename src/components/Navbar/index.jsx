import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/dashboard" className="navbar-brand"> Rootine</Link>
      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/dashboard" className="nav-link"> Hello</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
