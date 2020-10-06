import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';
import Sidebar from 'components/Sidebar';
import DragNDrop from 'components/DragNDrop';

import './styles.css';


function HomePage(){
	
	return(
		<div>
			<Navbar/>
			<HobbyForm/>
			<Sidebar/>
			<DragNDrop />
		</div>
	)
}

export default HomePage;