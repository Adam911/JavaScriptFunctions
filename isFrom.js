var isFrom = function(regNumber, location){
   var isBelliville = regNumber.startsWith(location);
   var isDurban = regNumber.startsWith(location);

   console.log("Where the number plate derives from is "+ isBelliville );
   console.log("Where the number plate derives from is "+ isDurban );

}
isFrom('CY189-012', 'CY');
isFrom('CY189-012', 'ND');
