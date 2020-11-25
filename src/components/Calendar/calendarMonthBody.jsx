import React, {useEffect, useState} from "react";
import moment from "moment";
import CalendarMonth from "./calendarMonth";

export default function CalendarMonthBody(props) {
  const[showYearTable, setShowYearTable] = useState(false);
  const[showMonthTable, setShowMonthTable] = useState(false);
  
  const month = moment.months();
  let months = [];
  let rows = [];
	let cells = [];

	  month.map(data => {
	  months.push(
	    <CalendarMonth month={data} onClick={props.onClick}/>
	  );
	});

  months.forEach((row, i) => {
	  if (i % 3 !== 0 || i == 0) {
	    cells.push(row);
	  } else {
	    rows.push(cells);
	    cells = [];
	    cells.push(row);
	  }
  });
  
  rows.push(cells);
	let monthlist = rows.map((d, i) => {
	  return <tr>{d}</tr>;
	});

  return (
    <table className="calendar-month">
      <thead>
        <tr>
          <th colSpan="4">Select a Month</th>
        </tr>
      </thead>
      <tbody>{monthlist}</tbody>
    </table>

  )};
