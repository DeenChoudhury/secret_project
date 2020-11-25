import React from "react";
import moment from "moment";
import CalendarDayBody from './calendarDayBody';
import CalendarMonthBody from './calendarMonthBody';
import CalendarYearBody from './calendarYearBody';
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
	
	month = () => {
		return this.state.dateObject.format("MMMM");
	}
    
	showMonth = () => {
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
	      {this.state.showYearTable && <CalendarYearBody dates={this.getDates} data={this.year()} onClick={this.setYear}/>}
	      {this.state.showMonthTable && (
	        <CalendarMonthBody onClick={this.setMonth} />
	      )}
	    </div>

	    {this.state.showDateTable && (
	      <div className="calendar-date">
	        <CalendarDayBody onDayClick={this.onDayClick}/>
	      </div>
	    )}
	  </div>
	);
	}
}