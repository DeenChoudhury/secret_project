import React, {useState} from 'react';

import './styles.css';
import add_button from 'images/add_button.svg';
import { test } from 'api';

function HobbyForm(){
	const [showHobbyForm, setShowHobbyForm] = useState(false);

	function doTest(){
		let x = test();
		console.log(x);
	}
	return (
		<div>
			<div className="add-hobby-container">
				<div className="btn-container" onClick={() => setShowHobbyForm(!showHobbyForm)}>
					<img className={showHobbyForm ? "btn-container__img--animate":"btn-container__img"} 
					src={add_button} alt={add_button}/>
				</div>
				{showHobbyForm ? doTest() : null}
				<div className={showHobbyForm ? "form-container--animate":"form-container--hidden"}>
					<h1>YERRRRRRRRR</h1>
				</div>
			</div>
		</div>
	);

}

export default HobbyForm;