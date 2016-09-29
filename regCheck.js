var regCheck = function(regNumber, location){
   var isGP = regNumber.includes(location);
   var isMP = regNumber.includes(location);



   console.log("The number plate checks out to be "+ isGP );
   console.log("The number plate checks out to be "+ isMP );

}

regCheck('DV 23 NB GP', 'GP');
regCheck('DV 23 LP GP', 'MP');
