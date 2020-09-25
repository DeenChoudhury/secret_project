import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

class Home extends React.Component{
	render(){
		return(
			<div>
			<Navbar />
			<Sidebar />
			</div>
		);
	};
}

export default Home;