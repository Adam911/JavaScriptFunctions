var Bellville = function (numberPlate){
 var isFromBellville = numberPlate.startsWith("CY");
 console.log("This person is not from Bellville" );
}

var Paarl = function (numberPlate){
 var isFromPaarl = numberPlate.startsWith("CJ");
 console.log("This person is from Paarl");
}

var CapeTown = function (numberPlate){
 var isFromCapeTown = numberPlate.startsWith("CA");
 console.log("This person is not from Cape Town");
   //return parameters
}

var Gauteng = function (numberPlate){
 var isFromGauteng = numberPlate.endsWith("GP");
 console.log("This person is from Gauteng");
   //return parameters
}

var Limpopo = function (numberPlate){
 var isFromLimpopo = numberPlate.endsWith("L");
 console.log( "This person is from Limpopo");
   //return parameters
}

Bellville('CJ 98912');
Paarl('CJ 98912');
CapeTown('CA 98912');
Limpopo('DR T122 L');
Gauteng('DR 12 TY GP');
