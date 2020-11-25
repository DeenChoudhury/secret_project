import React, {useState, useEffect} from "react";
import moment from "moment";
import {getCompletions, getTracker} from '../../api';



function CalendarDay(props) {

  const completedList = props.completed ? props.completed : [];
  const dayStyle = {
    backgroundColor: completedList.includes(props.day.toString()) ? "#28c2cd" : ""
  }
  return (
    props.isClickable ? (
    <td key={props.day} style={dayStyle}>
      <span
        onClick={e => {props.onDayClick(e, props.day);}}
      >
        {props.day}
      </span>
    </td>
    ) : (
      <th key={props.day} className={`calendar-day ${props.currDay}`}>
        {props.day}
      </th>
    )
  )
};

export default CalendarDay;