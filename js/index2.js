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
      $(".project").css('font-size', '150%');
      projectstatus = 'show'
        $(".reading").css('font-size', '100%');
        $(".exercise").css('font-size', '100%');
        readingstatus = 'noshow';
        exercisestatus = 'noshow';
    }
    else {
      $(".project").css('font-size', '100%');
      $(".reading").css('font-size', '100%');
      $(".exercise").css('font-size', '100%');
      projectstatus = 'noshow';
    }
  })

// READING BUTTON
  var readingstatus = 'noshow'

  $('#reading-button').click(function(){

    if(readingstatus == 'noshow'){
      $(".reading").css('font-size', '150%');
      readingstatus = 'show'
        $(".project").css('font-size', '100%');
        $(".exercise").css('font-size', '100%');
        projectstatus = 'noshow';
        exercisestatus = 'noshow';
    }
    else {
      $(".project").css('font-size', '100%');
      $(".reading").css('font-size', '100%');
      $(".exercise").css('font-size', '100%');
      readingstatus = 'noshow';
    }
  })

// EXERCISE BUTTON
  var exercisestatus = 'noshow'

  $('#exercise-button').click(function(){

    if(exercisestatus == 'noshow'){
      $(".exercise").css('font-size', '150%');
      exercisestatus = 'show'
        $(".project").css('font-size', '100%');
        $(".reading").css('font-size', '100%');
        projectstatus = 'noshow';
        readingstatus = 'noshow';
    }
    else {
      $(".project").css('font-size', '100%');
      $(".reading").css('font-size', '100%');
      $(".exercise").css('font-size', '100%');
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
