import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';

import './styles.css';
import Sidebar from 'components/Sidebar';

function HomePage(){

	
	return(
		<div>
			<Navbar/>
			<HobbyForm />
			<Sidebar />
		</div>
	)
}

export default HomePage;


