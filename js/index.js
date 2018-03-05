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
    status = 'show'
  }
  else {
    $("#weeklylist").slideToggle("slow");
    $("#weekly:hover").css("cursor", "s-resize");
    weeklystatus = 'weeklynoshow'
  }
})

// MENU TOGGLE - READING RESPONSES

var readingstatus = 'readingnoshow'

$("#reading").click(function(){
  if(readingstatus == "readingnoshow"){
    $("#readinglist").slideToggle("slow");
    $("#reading:hover").css("cursor", "n-resize");
    readingstatus = 'show'
  }
  else {
    $("#readinglist").slideToggle("slow");
    $("#reading:hover").css("cursor", "s-resize");
    readingstatus = 'readingnoshow'
  }
})

// MENU TOGGLE - PROJECTS

var projectstatus = 'projectnoshow'

$("#project").click(function(){
  if(projectstatus == "projectnoshow"){
    $("#projectlist").slideToggle("slow");
    $("#project:hover").css("cursor", "n-resize");
    projectstatus = 'show'
  }
  else {
    $("#projectlist").slideToggle("slow");
    $("#project:hover").css("cursor", "s-resize");
    projectstatus = 'projectnoshow'
  }
})

// MENU TOGGLE - EXERCISES

var exercisesstatus = 'exercisesnoshow'

$("#exercises").click(function(){
  if(exercisesstatus == "exercisesnoshow"){
    $("#exerciseslist").slideToggle("slow");
    $("#exercises:hover").css("cursor", "n-resize");
    exercisesstatus = 'show'
  }
  else {
    $("#exerciseslist").slideToggle("slow");
    $("#exercises:hover").css("cursor", "s-resize");
    exercisesstatus = 'exercisesnoshow'
  }
})
