const dateOne = new Date("2016-09-12");
const dateTwo = new Date("2016-09-12");

var sameWeekday = function(dateOne,dateTwo) {
  var weekdays = ['Monday','Tuesday','Thursday','Friday','Saturday','Sunday']

  var dateWeekOne = dateOne.getDay();
  var dateWeekTwo = dateTwo.getDay();

var weekDayOne = weekdays[dateWeekOne];
var weekDayTwo = weekdays[dateWeekTwo];

var checkdates =  weekDayOne === weekDayTwo;

return checkdates;
}
var dateResult = sameWeekday(dateOne,dateTwo);
console.log(dateResult);
