function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aCLqWRcP2e":
        Script1();
        break;
      case "60DsLtkgVM2":
        Script2();
        break;
      case "6QkEP6HcFMi":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();


var A = -4.6864
var B = 0.143
var C = 37.876


var EWWL = player.GetVar("EWWL");
var EndVol = B * Math.pow(EWWL, 2) + A * EWWL + C;

var SWWL = player.GetVar("SWWL");
var StartVol = B * Math.pow(SWWL, 2) + A * SWWL + C;

var MGD = player.GetVar("MGD");
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script2()
{
  var player = GetPlayer();


var A = -4.6864
var B = 0.143
var C = 37.876


var EWWL = player.GetVar("EWWL");
var EndVol = B * Math.pow(EWWL, 2) + A * EWWL + C;

var SWWL = player.GetVar("SWWL");
var StartVol = B * Math.pow(SWWL, 2) + A * SWWL + C;

var MGD = player.GetVar("MGD");
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

function Script3()
{
  var player = GetPlayer();


var A = -4.6864
var B = 0.143
var C = 37.876


var EWWL = player.GetVar("EWWL");
var EndVol = B * Math.pow(EWWL, 2) + A * EWWL + C;

var SWWL = player.GetVar("SWWL");
var StartVol = B * Math.pow(SWWL, 2) + A * SWWL + C;

var MGD = player.GetVar("MGD");
var MGM = MGD / 1440;


var Minutes = Math.round((EndVol - StartVol) / MGM);


player.SetVar("MINUTES", Minutes);
}

