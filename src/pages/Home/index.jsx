import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';

import './styles.css';


function Home(){
	
	return(
		<div>
			<form action="/login" method="post">
			    <div>
			        <label>Username:</label>
			        <input type="text" name="username"/>
			    </div>
			    <div>
			        <label>Password:</label>
			        <input type="password" name="password"/>
			    </div>
			    <div>
			        <input type="submit" value="Log In"/>
			    </div>
			</form>
		</div>
	)
}

export default Home;