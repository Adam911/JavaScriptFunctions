
var regNumber = function(regCheck){
  var isGP = regCheck('DV 23 NB GP', 'GP');
  var isGP =true;
  console.log(isGP);

  var isMP = regCheck('DV 23 LP GP', 'MP');
  var isMP = false;
  console.log(isMP);

  var isBellville = isFrom('CY189-012', 'CY');
  var isBellville = true;
  console.log(isBellville);

  var isDurban = isFrom('-CY189-012', 'ND');
  var isDurban = false;
  console.log(isDurban);
}
