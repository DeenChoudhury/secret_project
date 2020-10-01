import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';

import './styles.css';


function HomePage(){
	
	return(
		<div>
			<Navbar/>
			<HobbyForm/>

		</div>
	)
}

export default HomePage;