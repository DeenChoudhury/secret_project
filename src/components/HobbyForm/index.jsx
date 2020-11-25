import React, { useState } from 'react';
import {postHabitDays} from 'api';
import {Modal, Button} from 'react-bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HobbyForm(props) {
  const [dates, setDates] = useState([false,false,false,false,false,false,false]);
  const [name, setName] = useState("");
  const inputStyle = {
    width:"15px"
  };
  
  const buttonStyle = {
    close:{
      borderRadius:"10px",
      border:"1px solid #434646",
      backgroundColor:"#434646",
      color:"#ffffff",
      fontSize: "12px",
      fontWeight:"bold",
      padding:"12px 45px",
      letterSpacing: "1px"
    },
    save:{
      borderRadius:"10px",
      border:"1px solid #2be6ff",
      backgroundColor:"#2be6ff",
      color:"#ffffff",
      fontSize: "12px",
      fontWeight:"bold",
      padding:"12px 45px",
      letterSpacing: "1px"
    }
  };

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

  const handleClose = () => props.setShowModal(false);

  return (
    <div>
      <div className="add-hobby-container">
          <Modal show={true} onHide={handleClose}>
          <form onSubmit={() => postHabitDays({dates, name})}>
            <Modal.Header closeButton>
            <Modal.Title>Create a New Habit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="input-field">
              <h6>What is the name of this habit:</h6>
              <input placeholder="Habit Name" type="text" name="new_habit" onChange={handleName}/>
              </div>
              <div className="checkbox-container">
              <h6>Select the days you would like to perform this habit on:</h6>
                <label> Monday </label>
                <input 
                type="checkbox" 
                name="monday"
                value= {0}
                onChange={handleCheck}
                style={inputStyle}/>
              <label> Tuesday </label>
                <input 
                type="checkbox" 
                name="tuesday"
                value= {1}
                onChange={handleCheck}
                style={inputStyle}/>
              <label> Wednesday </label>
                <input 
                type="checkbox" 
                name="wednesday"
                value= {2}
                onChange={handleCheck}
                style={inputStyle}/>
              <label> Thursday </label>
                <input 
                type="checkbox" 
                name="thursday"
                value= {3}
                onChange={handleCheck}
                style={inputStyle}/>
              <label> Friday </label>
                <input 
                type="checkbox" 
                name="friday"
                value= {4}
                onChange={handleCheck}
                style={inputStyle}/>
              <label> Saturday </label>
                <input 
                type="checkbox" 
                name="Saturday"
                value= {5}
                onChange={handleCheck}
                style={inputStyle}/>
              <label> Sunday </label>
                <input 
                type="checkbox" 
                name="sunday"
                value= {6}
                onChange={handleCheck}
                style={inputStyle}/>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button variant="secondary" onClick={handleClose} style={buttonStyle.close}>
              Close
              </button>
              <button type="submit" value="Submit" name="habit_submit" style={buttonStyle.save}>
              Submit Changes
            </button>
            </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
  );
}

export default HobbyForm;
