import React, {useState} from "react";
import moment from "moment";



function CalendarDay(props) {
  
  return (
    props.isClickable ? (
    <td key={props.day} className={`calendar-day ${props.currDay}`}>
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