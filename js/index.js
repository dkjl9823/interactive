$(document).ready(function(){

// RANDOM NAME BUTTON
  $('#random-button').click(function(){

    var words = ["Daniel", "Kyungjae", "Dan", "Kyungj", "KJ", "경재", "다니엘", "대녈", "景宰", "[gjʌŋ.d͡ʑɛ]", "[dæ.njʌl]"];
    var random_word = words[Math.floor(Math.random()*words.length)];

    $('#name').html(random_word);
    });
})

// PROJECT BUTTON
  var projectstatus = 'noshow'

  $('#project-button').click(function(){

    if(projectstatus == 'noshow'){
      $(".project").css('background', '#FFFADE');
      projectstatus = 'show'
        $(".reading").css('background', 'none');
        $(".exercise").css('background', 'none');
        readingstatus = 'noshow';
        exercisestatus = 'noshow';
    }
    else {
      $(".project").css('background', 'none');
      $(".reading").css('background', 'none');
      $(".exercise").css('background', 'none');
      projectstatus = 'noshow';
    }
  })

// READING BUTTON
  var readingstatus = 'noshow'

  $('#reading-button').click(function(){

    if(readingstatus == 'noshow'){
      $(".reading").css('background', '#FFFADE');
      readingstatus = 'show'
        $(".project").css('background', 'none');
        $(".exercise").css('background', 'none');
        projectstatus = 'noshow';
        exercisestatus = 'noshow';
    }
    else {
      $(".project").css('background', 'none');
      $(".reading").css('background', 'none');
      $(".exercise").css('background', 'none');
      readingstatus = 'noshow';
    }
  })

// EXERCISE BUTTON
  var exercisestatus = 'noshow'

  $('#exercise-button').click(function(){

    if(exercisestatus == 'noshow'){
      $(".exercise").css('background', '#FFFADE');
      exercisestatus = 'show'
        $(".project").css('background', 'none');
        $(".reading").css('background', 'none');
        projectstatus = 'noshow';
        readingstatus = 'noshow';
    }
    else {
      $(".project").css('background', 'none');
      $(".reading").css('background', 'none');
      $(".exercise").css('background', 'none');
      exercisestatus = 'noshow';
    }
  })

// MONTH SCROLL BUTTONS
// $("#january-button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#january").offset().top
//     });
// });
//
// $("#february-button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#february").offset().top
//     });
// });
//
// $("#march-button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#march").offset().top
//     });
// });
