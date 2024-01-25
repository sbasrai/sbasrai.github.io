function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uaoznufG9O":
        Script1();
        break;
      case "6n7l34T3mZf":
        Script2();
        break;
      case "6NwAjSzZoVk":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

// Formula: 0.0002X^3 + 0.0255X^2 - 0.4851X + 3.7104 (R^2=0.9998)
var A = 0.0002
var B = 0.0255
var C = -0.4851
var D = 3.7104



var EWWL = player.GetVar("EWWL");
var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

var SWWL = player.GetVar("SWWL");
var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

var MGD = player.GetVar("MGD");
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script2()
{
  var player = GetPlayer();

// Formula: 0.0002X^3 + 0.0255X^2 - 0.4851X + 3.7104 (R^2=0.9998)
var A = 0.0002
var B = 0.0255
var C = -0.4851
var D = 3.7104



var EWWL = player.GetVar("EWWL");
var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

var SWWL = player.GetVar("SWWL");
var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

var MGD = player.GetVar("MGD");
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script3()
{
  var player = GetPlayer();

// Formula: 0.0002X^3 + 0.0255X^2 - 0.4851X + 3.7104 (R^2=0.9998)
var A = 0.0002
var B = 0.0255
var C = -0.4851
var D = 3.7104



var EWWL = player.GetVar("EWWL");
var EndVol = A * Math.pow(EWWL, 3) + B * Math.pow(EWWL, 2) + C * EWWL + D;

var SWWL = player.GetVar("SWWL");
var StartVol = A * Math.pow(SWWL, 3) + B * Math.pow(SWWL, 2) + C * SWWL + D;

var MGD = player.GetVar("MGD");
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

