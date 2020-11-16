import React from "react";
import moment from "moment";
import CalendarBody from './calendarBody';
import { range } from "moment-range";
import "./styles.css";

export default class Calendar extends React.Component {

	state = {
	showYearTable: false,
	showMonthTable: false,
	showDateTable: true,
	dateObject: moment(),
	allmonths: moment.months(),
	selectedDay: null
  };
  
  
	year = () => {return this.state.dateObject.format("Y");};
    
	firstDayOfMonth = () => {
	let dateObject = this.state.dateObject;
	let firstDay = moment(dateObject)
	  .startOf("month")
	  .format("d"); // Day of week 0...1..5...6
	return firstDay;
  };
  
	month = () => {return this.state.dateObject.format("MMMM");};
  
	showMonth = (e, month) => {
	this.setState({
    showMonthTable: !this.state.showMonthTable, 
    showDateTable: !this.state.showDateTable
	  });
  };
  
	setMonth = month => {
	let monthNo = this.state.allmonths.indexOf(month);
	let dateObject = Object.assign({}, this.state.dateObject);
	dateObject = moment(dateObject).set("month", monthNo);
	this.setState({
	  dateObject: dateObject,
	  showMonthTable: !this.state.showMonthTable,
	  showDateTable: !this.state.showDateTable
	  });
  };
  
	MonthList = props => {
	let months = [];
	props.data.map(data => {
	  months.push(
	    <td
	      key={data}
	      className="calendar-month"
	      onClick={e => {this.setMonth(data);}}
	    >
	      <span>{data}</span>
	    </td>
	  );
	});
	let rows = [];
	let cells = [];

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
	);
  };
  
	showYearTable = e => {
	this.setState({
	  showYearTable: !this.state.showYearTable,
	  showDateTable: !this.state.showDateTable
	});
	};

	onPrev = () => {
	let curr = "";
	if (this.state.showYearTable === true) {
	  curr = "year";
	} else {
	  curr = "month";
	}
	this.setState({
	  dateObject: this.state.dateObject.subtract(1, curr)
	});
  };
  
	onNext = () => {
	let curr = "";
	if (this.state.showYearTable === true) {
	  curr = "year";
	} else {
	  curr = "month";
	}
	this.setState({
	  dateObject: this.state.dateObject.add(1, curr)
	});
  };
  
	setYear = year => {
	// alert(year)
	let dateObject = Object.assign({}, this.state.dateObject);
	dateObject = moment(dateObject).set("year", year);
	this.setState({
	  dateObject: dateObject,
	  showMonthTable: !this.state.showMonthTable,
	  showYearTable: !this.state.showYearTable
	});
  };
  
	onYearChange = e => {
	this.setYear(e.target.value);
	};
	getDates(startDate, stopDate) {
	var dateArray = [];
	var currentDate = moment(startDate);
	var stopDate = moment(stopDate);
	while (currentDate <= stopDate) {
	  dateArray.push(moment(currentDate).format("YYYY"));
	  currentDate = moment(currentDate).add(1, "year");
	}
	return dateArray;
	}
	YearTable = props => {
	let months = [];
	let nextten = moment()
	  .set("year", props)
	  .add("year", 12)
	  .format("Y");

	let tenyear = this.getDates(props, nextten);

	tenyear.map(data => {
	  months.push(
	    <td
	      key={data}
	      className="calendar-month"
	      onClick={e => {
	        this.setYear(data);
	      }}
	    >
	      <span>{data}</span>
	    </td>
	  );
	});
	let rows = [];
	let cells = [];

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
  
	onDayClick = (e, d) => {
  this.setState({selectedDay: d}, () => 
    {console.log("SELECTED DAY: ", this.state.selectedDay);}
	  );
  };
  
	render() {

	return (
	  <div className="tail-datetime-calendar">
	    <div className="calendar-navi">
	      <span
	        onClick={e => {this.onPrev();}}
	        class="calendar-button button-prev"
	      />
	      {!this.state.showMonthTable && (
	        <span
	          onClick={e => {this.showMonth();}}
	          class="calendar-label"
	        >
	          {this.month()}
	        </span>
	      )}
        <span 
        className="calendar-label" 
        onClick={e => this.showYearTable()}>
	        {this.year()}
	      </span>
	       <span
	      onClick={e => {this.onNext();}}
	      className="calendar-button button-next"
	    />
	    </div>

	    <div className="calendar-date">
	      {this.state.showYearTable && <this.YearTable props={this.year()} />}
	      {this.state.showMonthTable && (
	        <this.MonthList data={moment.months()} />
	      )}
	    </div>

	    {this.state.showDateTable && (
	      <div className="calendar-date">
	        <CalendarBody onDayClick={this.onDayClick}/>
	      </div>
	    )}
	  </div>
	);
	}
}