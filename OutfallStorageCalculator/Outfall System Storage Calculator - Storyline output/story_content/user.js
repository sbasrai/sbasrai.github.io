function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gbcDf0HjRH":
        Script1();
        break;
      case "6awk8JzcrgQ":
        Script2();
        break;
      case "6GpQKqVrf7E":
        Script3();
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

