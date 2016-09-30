var numberPlate = "CA 182736,CY 523519,CJ 812328";

countRegNumber = function(regNumber){
var splitString = regNumber.split(",");
var countNum = splitString.length;
return splitString, countNum;

}
console.log("The following number plates counted is "+countRegNumber('CA 182736,CY 523519,CJ 812328'));
console.log("The following number plates counted is "+countRegNumber('CA 42665, AA 12 RT GP'));

//for (var i = 0, 0 < settedNum, i++){};
