import React, {useState} from "react";
import moment from "moment";
import CalendarDay from './calendarDay';


export default function CalendarBody(props) {
  const daysInMonth = moment().daysInMonth();
  const currDay = moment().format("D");
  let weekdayshortname = []
  let totalDays = [];
  for (let d = 1; d <= daysInMonth; d++) {
    let currentDay = d === currDay ? "today" : "";
    totalDays.push(
      <CalendarDay day={d} currDay={currentDay} onDayClick={props.onDayClick} isClickable/>
    );
    
    weekdayshortname.push(
      <CalendarDay day={d} currDay={currentDay} onDayClick={props.onDayClick}/>
    );
  }

  return(
    <table className="calendar-day">
      <thead>
        <tr>{weekdayshortname}</tr>
      </thead>
      <tbody>
      <tr>{totalDays}</tr>
      </tbody>
    </table>
  )
}
