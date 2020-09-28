import React, {useState} from 'react';
import './styles.css';
import add_button from 'images/add_button.svg';

//MDN docs on fetch and course
async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
	  mode: 'cors', // no-cors, *cors, same-origin
	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	  credentials: 'same-origin', // include, *same-origin, omit
	  headers: {
		'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded'
	  },
	  redirect: 'follow', // manual, *follow, error
	  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	  body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
  }



function HobbyForm(){
	const [showHobbyForm, setShowHobbyForm] = useState(false);

	return (
		<div>
			<div className="add-hobby-container">
				<div className="btn-container" onClick={() => postData('http://localhost:3001/user', { title: "jeff2", content: "whew" })
	.then(data => {
	  console.log(data); // JSON data parsed by `data.json()` call
	})
	}>
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