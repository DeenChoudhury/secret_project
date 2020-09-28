import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import calendar from '../../components/calendar';

class Home extends React.Component{
	render(){
		return(
			<div>
			<Navbar />
			<Sidebar />
			<div><calendar /></div>
			</div>
		);
	};
}

export default Home;