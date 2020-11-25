import React, {useState} from "react";
import moment from "moment";

export default function CalendarYear(props) {

  return (
    <td
	    key={props.data}
	    className="calendar-month"
	    onClick={e => {
	        props.onClick(props.data);
	      }}
	  >
	  <span>{props.data}</span>
	  </td>
  )

}