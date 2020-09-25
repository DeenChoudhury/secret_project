import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';

import './styles.css';


function Home(){
	
	return(
		<div>
			<Navbar/>
			<HobbyForm/>
		</div>
	)
}

export default Home;