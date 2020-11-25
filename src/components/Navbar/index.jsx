import React from 'react';
import { Link } from 'react-router-dom';
import HobbyForm from 'components/HobbyForm';
import addButton from 'images/add_button.svg';
import './styles.css';


function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/dashboard" className="navbar-brand"> Rootine</Link>
      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/dashboard" className="nav-link"> Home</Link>
          </li>
        </ul>
      </div>
      <div className="btn-container" style={{width:"170px"}} onClick={() => {props.setShowModal(true)}}>
          <button variant="secondary"> Add Habit </button>
      </div>
    </nav>
  );
}

export default Navbar;
