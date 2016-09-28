
var regNumber = function(regCheck){
  var isGP = regCheck.endsWith('DV 23 NB GP', 'GP');
  console.log(isGP);

  var isMP = regCheck('DV 23 LP GP', 'MP');{}

  console.log(isMP);
}
  var isBellville = isFrom('CY189-012', 'CY');
  var isBellville = true;
  console.log(isBellville);

  var isDurban = isFrom('-CY189-012', 'ND');
  var isDurban = false;
  console.log(isDurban);
}
