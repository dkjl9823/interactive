$(document).ready(function(){

// TANGLED

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

$('#red').click(function(){

  var today = new Date(),
            h = checkTime(today.getHours()),
            min = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds()),
            y = checkTime(today.getFullYear()),
            m = checkTime(today.getMonth() + 1),
            d = checkTime(today.getDate());


  $("#p1").html("GALLOWS AND LOLLIPOPS<br>IS CURRENTLY");
  $("#p2").html("TANGLED");
  // $("#p3").html("(LAST UPDATED " + h + ":" + min + ":" + s + " " + m + "." + d + "." + y + ")");
  $("#p3").html("(LAST UPDATED 13:25:12 04.28.2018)");
  $("#p4").html("IT HAS BEEN TANGLED SINCE:<br>13:25:12 04.28.2018");
  $("body").css("color", "orangered");
  $("body").css("background-color", "black");

});

// NOT TANGLED

$('#blue').click(function(){

  var today = new Date(),
            h = checkTime(today.getHours()),
            min = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds()),
            y = checkTime(today.getFullYear()),
            m = checkTime(today.getMonth() + 1),
            d = checkTime(today.getDate());

  $("#p1").html("Gallows and Lollipops<br>is currently");
  $("#p2").html("not tangled");
  // $("#p3").html("(last updated " + h + ":" + min + ":" + s + " " + m + "." + d + "." + y + ")");
  $("#p3").html("(last updated 13:25:15 04.28.2018)");
  $("#p4").html("It was last seen tangled:<br>13:25:12 04.28.2018");
  $("body").css("color", "black");
  $("body").css("background-color", "white");

});

});
