import React, {useState} from 'react';

import './styles.css';
import add_button from 'images/add_button.svg';

function HobbyForm(){
	const [showHobbyForm, setShowHobbyForm] = useState(false);

	// function doTest(){
	// 	let x = test();
	// 	console.log(x);
	// }
	return (
		<div>
			<div className="add-hobby-container">
				<div className="btn-container" onClick={() => setShowHobbyForm(!showHobbyForm)}>
					<img className={showHobbyForm ? "btn-container__img--animate":"btn-container__img"} 
					src={add_button} alt={add_button}/>
				</div>
				{/* {showHobbyForm ? doTest() : null} */}
				<div className={showHobbyForm ? "form-container--animate":"form-container--hidden"}>
					<form action="/habits" method="post">
						<input type="text" name="new_habit"/>
						<button name="habit-submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);

}

export default HobbyForm;