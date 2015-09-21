
//CALENDAR BUILDING OBJECTS -- MODEL

var daysPerMonth = 
	[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Calendar(name) {
    this.startDate = new Date().getFullYear();
    this.calendarName = name;
    var that = this.startDate;
    this.year = (function(){
        var years = new Array(5);
        var year = that;
        for (var i = 0; i < years.length; i++) {
            years[i] = new Year(year);
            year++;
        }
        return years;
    })();
}

function Year(year) {
    this.year = year;
	this.month = (function() {
		var months = new Array(12);
			var month = 0;
			for (var i = 0; i < months.length; i++) {
				months[i] = new Month(month, year);
				month++;
			}
			return months;
	})();
}

function Month(month, year) {
	this.year = year;
	this.month = translateMonth(month);
	this.numberOfDays = (function() {
			switch(month) {
				case 0:
					return daysPerMonth[0];
				case 1:
					if(year == '2016' || year == '2020' || year == '2024') {
						daysPerMonth[1] = 29;
					} else {
					    daysPerMonth[1] = 28;
					}
					return daysPerMonth[1];
				case 2:
					return daysPerMonth[2];
				case 3:
					return daysPerMonth[3];
				case 4:
					return daysPerMonth[4];
				case 5:
					return daysPerMonth[5];
				case 6:
					return daysPerMonth[6];
				case 7:
					return daysPerMonth[7];
				case 8:
					return daysPerMonth[8];
				case 9:
					return daysPerMonth[9];
				case 10:
					return daysPerMonth[10];
				case 11:
					return daysPerMonth[11];
			}
		})();
	var that = this.numberOfDays;
	this.day = (function() {
		var days = new Array(that);
		var day = 1;
		for (var i = 0; i < days.length; i++) {
			days[i] = new Day(year, month, i + 1);
			day++;
		}
		return days;
	})();
}

function Day(year, month, day) {
	var d = new Date(year,month,day);
	this.day = day;
	this.dayOfTheWeek = d.getDay();
	this.date = d.toDateString();
}

//OTHER FUNCTIONS

function translateMonth(month) {
	switch(month) {
		case 0:
			month = "Jan";
			break;
		case 1:
			month = "Feb";
			break;
		case 2:
			month = "Mar";
			break;
		case 3:
			month = "Apr";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "Jun";
			break;
		case 6:
			month = "Jul";
			break;
		case 7:
			month = "Aug";
			break;
		case 8:
			month = "Sep";
			break;
		case 9:
			month = "Oct";
			break;
		case 10:
			month = "Nov";
			break;
		case 11:
			month = "Dec";
			break;
	}
	return month;
}

function translateDay(day) {
	switch(day) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
	}
	return day;
}

function goToToday() {
	var today = new Date();
	var date = today.getDate();
	var day = today.getDay();
	var month = translateMonth(today.getMonth());
	var year = today.getFullYear();
	var currentMonth = document.getElementById("month");
	currentMonth.innerHTML = month;
	var currentYear = document.getElementById("year");
	currentYear.innerHTML = year;
	alert(day);
}

function populateCalendar() {
	var calendar = document.getElementById("calendar");
	for (var i = 0; i < 52; i++) {
		var row = document.createElement("div");
		row.setAttribute("class", "row");
		calendar.appendChild(row);
		for (var x = 0; x < 7; x++) {
			var day = document.createElement("div");
			day.setAttribute("class", "day");
			row.appendChild(day);
			var dayHeader = document.createElement("div");
			dayHeader.setAttribute("class", "dayHeader");
			day.appendChild(dayHeader);
			var d = document.createElement("p");
			d.setAttribute("class", "date");
			dayHeader.appendChild(d);
			var entries = document.createElement("div");
			entries.setAttribute("class", "entries");
			day.appendChild(entries);
		}
		
	}
}