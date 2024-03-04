function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5datmA6nc5k":
        Script1();
        break;
      case "62Pv5at5t8L":
        Script2();
        break;
      case "6HnCJKAs0TA":
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

