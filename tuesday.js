var isTuesday = function(day){
  var today = day.startsWith("Tu");
  return today;
}

var result = isTuesday("Sunday");
var resultOne = isTuesday("Tuesday");
console.log("Is today Tuesday? : " + result);
console.log("And the second input is " + resultOne);
