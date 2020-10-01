import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';

import './styles.css';
import Sidebar from 'components/Sidebar';




function Home(){
	
	return(
		<div>
			<Navbar/>
			<HobbyForm />
			<Sidebar />
		</div>
	)
}

export default Home;