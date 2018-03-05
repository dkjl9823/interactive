$(document).ready(function(){



// BALDING and TEARS
var hair = ['#hair-one', '#hair-two', '#hair-three', '#hair-four', '#hair-five', '#hair-six', '#hair-seven', '#hair-eight', '#hair-nine', '#hair-ten', '#hair-eleven'];
var losthair = []

function makebald(){

  var rndm_hair = hair[Math.floor(Math.random()*hair.length)];

      if(hair.length == 0){
        $('.tears').fadeIn('slow');
    }
      else {
        $(rndm_hair).css('opacity', 0);
        losthair.push(rndm_hair);
        hair.splice(hair.indexOf(rndm_hair), 1);

        console.log(hair);
        console.log(losthair);
      }

  }

$('#bald').click(makebald);
setInterval(makebald, 10000);

// UNBALDING

function givehair(){

var rndm_losthair = losthair[Math.floor(Math.random()*losthair.length)];

if(hair.length == 11){
  $('#darkness').css('background-color', 'black');
  }
else {
  $(rndm_losthair).css('opacity', 1);
  hair.push(rndm_losthair);
  losthair.splice(losthair.indexOf(rndm_losthair), 1);
  $('.tears').fadeOut('slow')

  console.log(hair);
}};

$('#unbald').click(givehair);

// HAIR COLOR BUTTON
  $('#hair-color').click(function(){

    var haircolor = ["#333", "lightpink", "yellowgreen", "lightsalmon", "burlywood", "rosybrown", "seagreen", "sienna", "gray", "steelblue", "cadetblue", "lightgray", "goldenrod"];
    var rndm_haircolor = haircolor[Math.floor(Math.random()*haircolor.length)];

    $('.hair').css('background-color', rndm_haircolor);
    $('.brow').css('background-color', rndm_haircolor);
    });
  })

// TEE COLOR BUTTON
  $('#tee-color').click(function(){

    var teecolor = ["#333", "lightpink", "yellowgreen", "lightsalmon", "burlywood", "rosybrown", "seagreen", "sienna", "gray", "steelblue", "cadetblue", "goldenrod", "darkseagreen"];
    var rndm_teecolor = teecolor[Math.floor(Math.random()*teecolor.length)];

    $('#shoulders').css('background-color', rndm_teecolor);
    });

// MIRROR COLOR BUTTON
  $('#bg1-color').click(function(){

    var bgcolor = ["white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke", "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush"];
    var rndm_bgcolor = bgcolor[Math.floor(Math.random()*bgcolor.length)];

    $('#mirror').css('background-color', rndm_bgcolor);
    });

// BG COLOR BUTTON
  $('#bg2-color').click(function(){

    var bgcolor = ["#333", "lightpink", "yellowgreen", "lightsalmon", "burlywood", "rosybrown", "seagreen", "sienna", "gray", "steelblue", "cadetblue", "goldenrod", "mistyrose"];
    var rndm_bgcolor2 = bgcolor[Math.floor(Math.random()*bgcolor.length)];

    $('body').css('background-color', rndm_bgcolor2);
    });

// LIGHT BUTTON
var status = 'on';

  $('#light').click(function(){
    if (status == 'on'){
        $('#darkness').css('opacity', 0.5);
        $('.eye').css('height', '20');
        status = 'off';
      }
    else {
        $('#darkness').css('opacity', 0);
        $('.eye').css('height', '10');
        status = 'on';
      }
    });

// TIME
