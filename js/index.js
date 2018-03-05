$(document).ready(function(){

// RANDOM NAME BUTTON
  $('#button').click(function(){

    var words = ["Daniel", "Kyungjae", "Dan", "Kyungj", "KJ", "경재", "다니엘", "대녈", "景宰", "[gjʌŋ.d͡ʑɛ]", "[dæ.njʌl]"];
    var random_word = words[Math.floor(Math.random()*words.length)];

    $('#name').html(random_word);
    });
})

// MENU TOGGLE - WEEKLY PROJECTS

var weeklystatus = 'weeklynoshow'

$("#weekly").click(function(){
  if(weeklystatus == "weeklynoshow"){
    $("#weeklylist").slideToggle("slow");
    $("#weekly:hover").css("cursor", "n-resize");
    weeklystatus = 'show'
      $("#readinglist").slideUp("slow");
      $("#exerciseslist").slideUp("slow");
      $("#projectlist").slideUp("slow");
      readingstatus = 'readingnoshow';
      projectstatus = 'projectnoshow';
      exercisesstatus = 'exercisesnoshow';
  }
  else {
    $("#weeklylist").slideToggle("slow");
    $("#weekly:hover").css("cursor", "s-resize");
    weeklystatus = 'weeklynoshow';
  }
})

// MENU TOGGLE - READING RESPONSES

var readingstatus = 'readingnoshow'

$("#reading").click(function(){
  if(readingstatus == "readingnoshow"){
    $("#readinglist").slideToggle("slow");
    $("#reading:hover").css("cursor", "n-resize");
    readingstatus = 'show'
      $("#weeklylist").slideUp("slow");
      $("#exerciseslist").slideUp("slow");
      $("#projectlist").slideUp("slow");
      projectstatus = 'projectnoshow';
      exercisesstatus = 'exercisesnoshow';
      weeklystatus = 'weeklynoshow';
  }
  else {
    $("#readinglist").slideToggle("slow");
    $("#reading:hover").css("cursor", "s-resize");
    readingstatus = 'readingnoshow';
  }
})

// MENU TOGGLE - PROJECTS

var projectstatus = 'projectnoshow'

$("#project").click(function(){
  if(projectstatus == "projectnoshow"){
    $("#projectlist").slideToggle("slow");
    $("#project:hover").css("cursor", "n-resize");
    projectstatus = 'show'
      $("#weeklylist").slideUp("slow");
      $("#readinglist").slideUp("slow");
      $("#exerciseslist").slideUp("slow");
      readingstatus = 'readingnoshow'
      exercisesstatus = 'exercisesnoshow'
      weeklystatus = 'weeklynoshow';
  }
  else {
    $("#projectlist").slideToggle("slow");
    $("#project:hover").css("cursor", "s-resize");
    projectstatus = 'projectnoshow';
  }
})

// MENU TOGGLE - EXERCISES

var exercisesstatus = 'exercisesnoshow'

$("#exercises").click(function(){
  if(exercisesstatus == "exercisesnoshow"){
    $("#exerciseslist").slideToggle("slow");
    $("#exercises:hover").css("cursor", "n-resize");
    exercisesstatus = 'show'
      $("#weeklylist").slideUp("slow");
      $("#readinglist").slideUp("slow");
      $("#projectlist").slideUp("slow");
      readingstatus = 'readingnoshow';
      projectstatus = 'projectnoshow';
      weeklystatus = 'weeklynoshow';
  }
  else {
    $("#exerciseslist").slideToggle("slow");
    $("#exercises:hover").css("cursor", "s-resize");
    exercisesstatus = 'exercisesnoshow';
  }
})
