var isTuesday = function(day){
  var today = day.startsWith("Tu");
  return today;
}

var result = isTuesday("Sunday");
var resultOne = isTuesday("Tuesday");
console.log(result);
console.log(resultOne);
