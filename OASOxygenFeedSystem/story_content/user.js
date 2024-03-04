function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uY9NYrLwCV":
        Script1();
        break;
      case "6d1dthOVJUU":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

// Formula -8E-05x3 + 0.0178x2 + 0.6684x
var A = -8*Math.pow(10, -5)
var B = +0.0178
var C = 0.6684




var VOLL = player.GetVar("LOXLEVELSSLIDE");



var LOXWEIGHT = Math.abs(A * Math.pow(VOLL, 3) + B * Math.pow(VOLL, 2) + C * Math.pow(VOLL, 1));
var LOXVOLUME = LOXWEIGHT * 2000/(8.34*1.14);
var PRESSURE = VOLL*1.14;
player.SetVar("LOXVOLUME", LOXVOLUME);
player.SetVar("LOXWEIGHT", LOXWEIGHT);
player.SetVar("PRESSURE", PRESSURE);



// For commas

var player=GetPlayer();
var LOXVOLUME=player.GetVar("LOXVOLUME");
var LOXVOLUME=LOXVOLUME.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var VOLTXT=LOXVOLUME.toString();
player.SetVar("VOLTXT", VOLTXT);


var player=GetPlayer();
var LOXWEIGHT=player.GetVar("LOXWEIGHT");
var LOXWEIGHT=LOXWEIGHT.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var WEIGHTTXT=LOXWEIGHT.toString();
player.SetVar("WEIGHTTXT", WEIGHTTXT);



var player=GetPlayer();
var PRESSURE=player.GetVar("PRESSURE");
var PRESSURE=VOLL.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var PRESSURETXT=PRESSURE.toString();
player.SetVar("PRESSURETXT", PRESSURETXT);
}

function Script2()
{
  var player = GetPlayer();

// Formula -8E-05x3 + 0.0178x2 + 0.6684x
var A = -8*Math.pow(10, -5)
var B = +0.0178
var C = 0.6684




var VOLL = player.GetVar("LOXLEVELSSLIDE");



var LOXWEIGHT = Math.abs(A * Math.pow(VOLL, 3) + B * Math.pow(VOLL, 2) + C * Math.pow(VOLL, 1));
var LOXVOLUME = LOXWEIGHT * 2000/(8.34*1.14);
var PRESSURE = VOLL*1.14;
player.SetVar("LOXVOLUME", LOXVOLUME);
player.SetVar("LOXWEIGHT", LOXWEIGHT);
player.SetVar("PRESSURE", PRESSURE);



// For commas

var player=GetPlayer();
var LOXVOLUME=player.GetVar("LOXVOLUME");
var LOXVOLUME=LOXVOLUME.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var VOLTXT=LOXVOLUME.toString();
player.SetVar("VOLTXT", VOLTXT);


var player=GetPlayer();
var LOXWEIGHT=player.GetVar("LOXWEIGHT");
var LOXWEIGHT=LOXWEIGHT.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var WEIGHTTXT=LOXWEIGHT.toString();
player.SetVar("WEIGHTTXT", WEIGHTTXT);



var player=GetPlayer();
var PRESSURE=player.GetVar("PRESSURE");
var PRESSURE=VOLL.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var PRESSURETXT=PRESSURE.toString();
player.SetVar("PRESSURETXT", PRESSURETXT);
}

