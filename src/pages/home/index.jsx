import React from 'react';

import Navbar from 'components/Navbar';
import HobbyForm from 'components/HobbyForm';
import add_button from 'images/add_button.svg'

import './styles.css';


function Home(){
	const [showHobbyForm, setShowHobbyForm] = React.useState(false);
	
	return(
		<div>
			<Navbar/>
			<div className="add-hobby-container">
				<div className="btn-container" onClick={() => setShowHobbyForm(!showHobbyForm)}>
					<img className={showHobbyForm ? "btn-container__img--animate":"btn-container__img"} 
					src={add_button} alt={add_button}/>
				</div>
				{ showHobbyForm ? <HobbyForm/> : null }
			</div>
		</div>
	)
}

export default Home;