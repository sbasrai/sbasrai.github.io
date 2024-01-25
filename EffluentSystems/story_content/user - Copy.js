function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hMS6Q78fA7":
        Script1();
        break;
      case "6SgH68kA6LZ":
        Script2();
        break;
      case "6CU7ruxS4Kf":
        Script3();
        break;
      case "6bajmvSzn1i":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

// Formula:  -0.011175*L^3 + 0.259052*L^2 - 0.655463*L + 1.19646 (R^2=0.999651)
var A = -0.011175
var B =  0.259052
var C = -0.655463
var D = 1.19646



var EWWL = player.GetVar("EWWL");
var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

var SWWL = player.GetVar("SWWL");
var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

var P1Flows = player.GetVar("P1Flows");
var GWRSFlow = player.GetVar("GWRSFlow");
var P2Flows = player.GetVar("P2Flows");

var MGD = parseInt(P1Flows) + parseInt(GWRSFlow) + parseInt(P2Flows);
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script2()
{
  var player = GetPlayer();

// Formula:  -0.011175*L^3 + 0.259052*L^2 - 0.655463*L + 1.19646 (R^2=0.999651)
var A = -0.011175
var B =  0.259052
var C = -0.655463
var D = 1.19646



var EWWL = player.GetVar("EWWL");
var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

var SWWL = player.GetVar("SWWL");
var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

var P1Flows = player.GetVar("P1Flows");
var GWRSFlow = player.GetVar("GWRSFlow");
var P2Flows = player.GetVar("P2Flows");

var MGD = parseInt(P1Flows) + parseInt(GWRSFlow) + parseInt(P2Flows);
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script3()
{
  var player = GetPlayer();

// Formula:  -0.011175*L^3 + 0.259052*L^2 - 0.655463*L + 1.19646 (R^2=0.999651)
var A = -0.011175
var B =  0.259052
var C = -0.655463
var D = 1.19646



var EWWL = player.GetVar("EWWL");
var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

var SWWL = player.GetVar("SWWL");
var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

var P1Flows = player.GetVar("P1Flows");
var GWRSFlow = player.GetVar("GWRSFlow");
var P2Flows = player.GetVar("P2Flows");

var MGD = parseInt(P1Flows) + parseInt(GWRSFlow) + parseInt(P2Flows);
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script4()
{
  var player = GetPlayer();

// Formula:  Q = -0.040070981915x6 + 0.174895105207x5 - 0.097041126894x4 - 0.418750735655x3 - 1.805070018883x2 - 3.895620124014x + 63.743170894086

var A = -0.040070981915
var B =  0.174895105207
var C = -0.097041126894
var D = -0.418750735655
var E =  -1.805070018883
var F = -3.895620124014
var G = 63.743170894086


var TIDE = player.GetVar("SEALEVEL");
var GRAVFLOW = Math.round(A * Math.pow(TIDE, 6) + B * Math.pow(TIDE, 5) + C * Math.pow(TIDE, 4) + D * Math.pow(TIDE, 3) + E * Math.pow(TIDE, 2) + + F * TIDE + G);

player.SetVar("GRAVFLOW", GRAVFLOW);

//var EWWL = player.GetVar("EWWL");
//var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

//var SWWL = player.GetVar("SWWL");
//var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

//var P1Flows = player.GetVar("P1Flows");
//var OCWDFlows = player.GetVar("OCWDFlows");
//var P2Flows = player.GetVar("P2Flows");

//var MGD = parseInt(P1Flows) + parseInt(OCWDFlows) + parseInt(P2Flows);
//var MGM = MGD / 1440;


//var Minutes = Math.round((EndVol - StartVol) / MGM);


//player.SetVar("MINUTES", Minutes);

}

