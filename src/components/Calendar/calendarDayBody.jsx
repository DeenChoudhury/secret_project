import React, {useEffect, useState} from "react";
import moment from "moment";
import CalendarDay from './calendarDay';
import { getCompletions } from "api";


export default function CalendarDayBody(props) {
  const [completedList, setCompletedList] = useState([]);

  const daysInMonth = moment().daysInMonth();
  const currMonth = moment().format("M")
  const currDay = parseInt(moment().format("D"));
  let weekdayshortname = [];
  let totalDays = [];
  
  useEffect(() => {
    getCompletions().then((res) => {
      const completedMonths = res[0].months;
      if (completedMonths.includes(currMonth)) {
        const completedDays = res[0].days;
        setCompletedList(completedDays);
      } else {
      setCompletedList([""]);
      }
    });
  }, completedList);

  
  for (let d = 1; d <= daysInMonth; d++) {
    let currentDay = d === currDay ? "today" : "";
    totalDays.push(
      <CalendarDay day={d} completed={completedList} currDay={currentDay} onDayClick={props.onDayClick} isClickable/>
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
