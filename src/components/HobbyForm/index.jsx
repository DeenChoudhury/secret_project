import React, {useState} from 'react';
<<<<<<< HEAD

import './styles.css';
import add_button from 'images/add_button.svg';
import { test } from 'api';

function HobbyForm(){
	const [showHobbyForm, setShowHobbyForm] = useState(false);
=======
import './styles.css';
import add_button from 'images/add_button.svg';
import axios from 'axios';
import { getTest, postData } from 'api';

function HobbyForm(){
	const [showHobbyForm, setShowHobbyForm] = useState(false);
	const [habit, setHabit] = useState("");
>>>>>>> trying to link get request in sidebar

	function doTest(){
		let x = test();
		console.log(x);
<<<<<<< HEAD
	}
=======
	};

	function handleChange(event) {
		setHabit(event.target.value);
	};

	function habitSubmit(event) {
		event.preventDefault();

		const payload = {
			title: habit,
			content: ""
		}

		axios({
			url:'http://localhost:3001/user',
			method: 'POST',
			data: payload
		})
      .then(() => {
        console.log('Data has been sent to server');
      })
      .catch(() => {
        console.log('Some server error');
      })
	};


>>>>>>> trying to link get request in sidebar
	return (
		<div>
			<div className="add-hobby-container">
				<div className="btn-container" onClick={() => setShowHobbyForm(!showHobbyForm)}>
					<img className={showHobbyForm ? "btn-container__img--animate":"btn-container__img"} 
					src={add_button} alt={add_button}/>
				</div>
				{showHobbyForm ? doTest() : null}
				<div className={showHobbyForm ? "form-container--animate":"form-container--hidden"}>
<<<<<<< HEAD
					<h1>YERRRRRRRRR</h1>
=======
					<form onSubmit={habitSubmit}>
					<input 
					onChange={handleChange} 
					type="text" 
					placeholder="What habit are you trying to build?"
					value={habit}
					/>
					<button>Submit</button>
					</form>
>>>>>>> trying to link get request in sidebar
				</div>
			</div>
		</div>
	);

}

export default HobbyForm;