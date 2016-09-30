var getDay = function(day){
  var dayNmbr = day.getDay();
  var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var nmeday = weekDays[dayNmbr];
  return nmeday;
}
const dated = new Date("1994-12-09");
console.log(getDay(dated));
