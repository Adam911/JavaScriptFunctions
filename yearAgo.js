var thisYear = new Date();

var yearsAgo = function (year){
var yearAgo = thisYear.getFullYear() -  year;
console.log("Its been "+ yearAgo + " years ago" )
}
yearsAgo(2009);
