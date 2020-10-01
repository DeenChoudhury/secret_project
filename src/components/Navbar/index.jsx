import React from 'react';
import { Link } from 'react-router-dom'; 

class Navbar extends React.Component{
    render(){
        return(
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/dashboard" className="navbar-brand"> Rootine</Link>
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/dashboard" className="nav-link"> Hello</Link>
                    </li>
                </ul>
          </div>
        </nav>
    )};
}

export default Navbar;