var isFrom = function(regNumber, location){
   var isBellville = regNumber.startsWith(location);
   var isDurban = regNumber.startsWith(location);

return isDurban;
}

var result = isFrom('CY189-012','ND');
var resultOne = isFrom('CJ 98912', 'CJ');
console.log('The following number plate certification is '+ result);
console.log('The following number plate certification is '+ resultOne);
