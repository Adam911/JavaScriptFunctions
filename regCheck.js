var regCheck = function(regNumber, location){
   var isGP = regNumber.includes(location);
   var isMP = regNumber.includes(location);
 return isMP;

}

var result = regCheck('DV 23 NB GP', 'GP');
var resultOne = regCheck('DV 23 LP GP', 'MP');

console.log(result);
console.log(resultOne);
