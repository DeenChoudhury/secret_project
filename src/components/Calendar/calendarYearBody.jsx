import React, {useEffect, useState} from "react";
import moment from "moment";
import CalendarYear from "./calendarYear";

export default function CalendarYearBody(props) {

  let year = [];
  let prevfive = moment()
	  .set("year", props)
	  .subtract("year", 5)
    .format("Y");
    
	let nextfive = moment()
	  .set("year", props)
	  .add("year", 6)
	  .format("Y");

	let fiveyear = props.dates(prevfive, props.data);

	fiveyear.map(data => {
	  year.push(
	    <CalendarYear data={data} onClick={props.onClick}/>
	  );
	});

	let rows = [];
	let cells = [];

	year.forEach((row, i) => {
	  if (i % 3 !== 0 || i == 0) {
	    cells.push(row);
	  } else {
	    rows.push(cells);
	    cells = [];
	    cells.push(row);
	  }
	});

	rows.push(cells);
	let yearlist = rows.map((d, i) => {
	  return <tr>{d}</tr>;
	});

	return (
	  <table className="calendar-month">
	    <thead>
	      <tr>
	        <th colSpan="4">Select a Year</th>
	      </tr>
	    </thead>
	    <tbody>{yearlist}</tbody>
	  </table>
	);
};