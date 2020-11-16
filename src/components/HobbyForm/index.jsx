import React, { useState } from 'react';
import {postHabitDays} from 'api';

import './styles.css';
import addButton from 'images/add_button.svg';


function HobbyForm() {
  const [showHobbyForm, setShowHobbyForm] = useState(false);
  const [dates, setDates] = useState([false,false,false,false,false,false,false]);
  const [name, setName] = useState("");

  function handleCheck(event){
    const value = event.target.value;
    dates[value] = !dates[value];
    setDates(dates);
  }

  function handleName(event){
    console.log(event.target.value);
    const value = event.target.value;
    setName(value);
  }

  return (
    <div>
      <div className="add-hobby-container">
        <div className="btn-container" onClick={() => setShowHobbyForm(!showHobbyForm)}>
          <img
            className={showHobbyForm ? 'btn-container__img--animate' : 'btn-container__img'}
            src={addButton}
            alt={addButton}
          />
        </div>
        {/* {showHobbyForm ? doTest() : null} */}
        <div className={showHobbyForm ? 'form-container--animate' : 'form-container--hidden'}>
          <form onSubmit={() => postHabitDays({dates, name})}>
            <input type="text" name="new_habit" onChange={handleName}/>
            <button 
            type="submit" name="habit-submit">Submit</button>
            <label> Monday
              <input 
              type="checkbox" 
              name="monday"
              value= {0}
              onChange={handleCheck}/>
            </label>
            <label> Tuesday
              <input 
              type="checkbox" 
              name="tuesday"
              value= {1}
              onChange={handleCheck}/>
            </label>
            <label> Wednesday
              <input 
              type="checkbox" 
              name="wednesday"
              value= {2}
              onChange={handleCheck}/>
            </label>
            <label> Thursday
              <input 
              type="checkbox" 
              name="thursday"
              value= {3}
              onChange={handleCheck}/>
            </label>
            <label> Friday
              <input 
              type="checkbox" 
              name="friday"
              value= {4}
              onChange={handleCheck}/>
            </label>
            <label> Saturday
              <input 
              type="checkbox" 
              name="Saturday"
              value= {5}
              onChange={handleCheck}/>
            </label>
            <label> Sunday
              <input 
              type="checkbox" 
              name="sunday"
              value= {6}
              onChange={handleCheck}/>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HobbyForm;
