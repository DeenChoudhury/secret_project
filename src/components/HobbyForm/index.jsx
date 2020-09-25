import React, {useState} from 'react';

import './styles.css';
import add_button from 'images/add_button.svg';

function HobbyForm(){
	const [showHobbyForm, setShowHobbyForm] = useState(false);

	return (
		<div>
			<div className="add-hobby-container">
				<div className="btn-container" onClick={() => setShowHobbyForm(!showHobbyForm)}>
					<img className={showHobbyForm ? "btn-container__img--animate":"btn-container__img"} 
					src={add_button} alt={add_button}/>
				</div>
				
				<div className={showHobbyForm ? "form-container--animate":"form-container--hidden"}>
					<h1>YERRRRRRRRR</h1>
				</div>
			</div>
		</div>
	);

}

export default HobbyForm;