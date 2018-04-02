39381393108// LETTER-DEFINITION

$(document).ready(function(){

  $('.letters').each(function() {

    var $letterWrapper = $(this);
    var words = $letterWrapper.html().split(' ');
    var wordArray = [];

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      var letterElements = letters.map(getHTMLForCharacter);
      wordArray.push(
      	'<div class="word">' +
      	letterElements.join('') +
        '</div>'
      );
    }

    // console.log(wordArray.join(getHTMLForCharacter(' ')));

    $letterWrapper.html(wordArray.join(getHTMLForCharacter(' ')));
  });

  function getHTMLForCharacter(character) {
      	var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
      	var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';
        return characterHTML;
  }

// POEMS

  var status = 'notgrown';
  console.log(status)

$('#thetower').click(function(){

    $('#a .top').css("border-top-width", 449 / 2);
    $('#a .bottom').css("border-bottom-width", 449 / 2);

    $('#b .top').css("border-top-width", 102 / 3);
    $('#b .bottom').css("border-bottom-width", 102 / 3);

    $('#c .top').css("border-top-width", 126 / 2);
    $('#c .bottom').css("border-bottom-width", 126 / 2);

    $('#d .top').css("border-top-width", 266 / 2);
    $('#d .bottom').css("border-bottom-width", 266 / 2);

    $('#e .top').css("border-top-width", 636 / 3);
    $('#e .bottom').css("border-bottom-width", 636 / 3);

    $('#f .top').css("border-top-width", 108 / 2);
    $('#f .bottom').css("border-bottom-width", 108 / 2);

    $('#g .top').css("border-top-width", 124 / 3);
    $('#g .bottom').css("border-bottom-width", 124 / 3);

    $('#h .top').css("border-top-width", 313 / 1);
    $('#h .bottom').css("border-bottom-width", 313 / 1);

    $('#i .top').css("border-top-width", 317 / 2);
    $('#i .bottom').css("border-bottom-width", 317 / 2);

    $('#j .top').css("border-top-width", 4 / 2);
    $('#j .bottom').css("border-bottom-width", 4 / 2);

    $('#k .top').css("border-top-width", 34 / 1);
    $('#k .bottom').css("border-bottom-width", 34 / 1);

    $('#l .top').css("border-top-width", 203 / 1);
    $('#l .bottom').css("border-bottom-width", 203 / 1);

    $('#m .top').css("border-top-width", 163 / 1);
    $('#m .bottom').css("border-bottom-width", 163 / 1);

    $('#n .top').css("border-top-width", 381 / 2);
    $('#n .bottom').css("border-bottom-width", 381 / 2);

    $('#o .top').css("border-top-width", 393 / 2);
    $('#o .bottom').css("border-bottom-width", 393 / 2);

    $('#p .top').css("border-top-width", 81 / 2);
    $('#p .bottom').css("border-bottom-width", 81 / 2);

    $('#q .top').css("border-top-width", 2 / 2);
    $('#q .bottom').css("border-bottom-width", 2 / 2);

    $('#r .top').css("border-top-width", 350 / 2);
    $('#r .bottom').css("border-bottom-width", 350 / 2);

    $('#s .top').css("border-top-width", 285 / 3);
    $('#s .bottom').css("border-bottom-width", 285 / 3);

    $('#t .top').css("border-top-width", 467 / 1);
    $('#t .bottom').css("border-bottom-width", 467 / 1);

    $('#u .top').css("border-top-width", 142 / 1);
    $('#u .bottom').css("border-bottom-width", 142 / 1);

    $('#v .top').css("border-top-width", 34 / 2);
    $('#v .bottom').css("border-bottom-width", 34 / 2);

    $('#w .top').css("border-top-width", 99 / 1);
    $('#w .bottom').css("border-bottom-width", 99 / 1);

    $('#x .top').css("border-top-width", 4 / 1);
    $('#x .bottom').css("border-bottom-width", 4 / 1);

    $('#y .top').css("border-top-width", 89 / 1);
    $('#y .bottom').css("border-bottom-width", 89 / 1);

    $('#z .top').css("border-top-width", 2);
    $('#z .bottom').css("border-bottom-width", 2);

    status = 'grown';
    console.log(status)
})

$('#architecture').click(function(){

    $('#a .top').css("border-top-width", 31 / 2);
    $('#a .bottom').css("border-bottom-width", 31 / 2);

    $('#b .top').css("border-top-width", 4 / 3);
    $('#b .bottom').css("border-bottom-width", 4 / 3);

    $('#c .top').css("border-top-width", 10 / 2);
    $('#c .bottom').css("border-bottom-width", 10 / 2);

    $('#d .top').css("border-top-width", 10 / 2);
    $('#d .bottom').css("border-bottom-width", 10 / 2);

    $('#e .top').css("border-top-width", 52 / 3);
    $('#e .bottom').css("border-bottom-width", 52 / 3);

    $('#f .top').css("border-top-width", 9 / 2);
    $('#f .bottom').css("border-bottom-width", 9 / 2);

    $('#g .top').css("border-top-width", 7 / 3);
    $('#g .bottom').css("border-bottom-width", 7 / 3);

    $('#h .top').css("border-top-width", 12 / 1);
    $('#h .bottom').css("border-bottom-width", 12 / 1);

    $('#i .top').css("border-top-width", 22 / 2);
    $('#i .bottom').css("border-bottom-width", 22 / 2);

    $('#j .top').css("border-top-width", 1.5 / 2);
    $('#j .bottom').css("border-bottom-width", 1.5 / 2);

    $('#k .top').css("border-top-width", 1 / 1);
    $('#k .bottom').css("border-bottom-width", 1 / 1);

    $('#l .top').css("border-top-width", 21 / 1);
    $('#l .bottom').css("border-bottom-width", 21 / 1);

    $('#m .top').css("border-top-width", 11 / 1);
    $('#m .bottom').css("border-bottom-width", 11 / 1);

    $('#n .top').css("border-top-width", 30 / 2);
    $('#n .bottom').css("border-bottom-width", 30 / 2);

    $('#o .top').css("border-top-width", 25 / 2);
    $('#o .bottom').css("border-bottom-width", 25 / 2);

    $('#p .top').css("border-top-width", 8 / 2);
    $('#p .bottom').css("border-bottom-width", 8 / 2);

    $('#q .top').css("border-top-width", 2 / 2);
    $('#q .bottom').css("border-bottom-width", 2 / 2);

    $('#r .top').css("border-top-width", 25 / 2);
    $('#r .bottom').css("border-bottom-width", 25 / 2);

    $('#s .top').css("border-top-width", 19 / 3);
    $('#s .bottom').css("border-bottom-width", 19 / 3);

    $('#t .top').css("border-top-width", 23 / 1);
    $('#t .bottom').css("border-bottom-width", 23 / 1);

    $('#u .top').css("border-top-width", 10 / 1);
    $('#u .bottom').css("border-bottom-width", 10 / 1);

    $('#v .top').css("border-top-width", 6 / 2);
    $('#v .bottom').css("border-bottom-width", 6 / 2);

    $('#w .top').css("border-top-width", 4 / 1);
    $('#w .bottom').css("border-bottom-width", 4 / 1);

    $('#x .top').css("border-top-width", 1 / 1);
    $('#x .bottom').css("border-bottom-width", 1 / 1);

    $('#y .top').css("border-top-width", 10 / 1);
    $('#y .bottom').css("border-bottom-width", 10 / 1);

    $('#z .top').css("border-top-width", 3 / 3);
    $('#z .bottom').css("border-bottom-width", 3 / 3);

    status = 'grown';
    console.log(status)
})

$('#thiscity').click(function(){

    $('#a .top').css("border-top-width", 95 / 2);
    $('#a .bottom').css("border-bottom-width", 95 / 2);

    $('#b .top').css("border-top-width", 17 / 3);
    $('#b .bottom').css("border-bottom-width", 17 / 3);

    $('#c .top').css("border-top-width", 27 / 2);
    $('#c .bottom').css("border-bottom-width", 27 / 2);

    $('#d .top').css("border-top-width", 42 / 2);
    $('#d .bottom').css("border-bottom-width", 42 / 2);

    $('#e .top').css("border-top-width", 156 / 3);
    $('#e .bottom').css("border-bottom-width", 156 / 3);

    $('#f .top').css("border-top-width", 18 / 2);
    $('#f .bottom').css("border-bottom-width", 18 / 2);

    $('#g .top').css("border-top-width", 49 / 3);
    $('#g .bottom').css("border-bottom-width", 49 / 3);

    $('#h .top').css("border-top-width", 78 / 1);
    $('#h .bottom').css("border-bottom-width", 78 / 1);

    $('#i .top').css("border-top-width", 85 / 2);
    $('#i .bottom').css("border-bottom-width", 85 / 2);

    $('#j .top').css("border-top-width", 2 / 2);
    $('#j .bottom').css("border-bottom-width", 2 / 2);

    $('#k .top').css("border-top-width", 3 / 1);
    $('#k .bottom').css("border-bottom-width", 3 / 1);

    $('#l .top').css("border-top-width", 32 / 1);
    $('#l .bottom').css("border-bottom-width", 32 / 1);

    $('#m .top').css("border-top-width", 34 / 1);
    $('#m .bottom').css("border-bottom-width", 34 / 1);

    $('#n .top').css("border-top-width", 110 / 2);
    $('#n .bottom').css("border-bottom-width", 110 / 2);

    $('#o .top').css("border-top-width", 92 / 2);
    $('#o .bottom').css("border-bottom-width", 92 / 2);

    $('#p .top').css("border-top-width", 23 / 2);
    $('#p .bottom').css("border-bottom-width", 23 / 2);

    $('#q .top').css("border-top-width", 4 / 2);
    $('#q .bottom').css("border-bottom-width", 4 / 2);

    $('#r .top').css("border-top-width", 67 / 2);
    $('#r .bottom').css("border-bottom-width", 67 / 2);

    $('#s .top').css("border-top-width", 81 / 3);
    $('#s .bottom').css("border-bottom-width", 81 / 3);

    $('#t .top').css("border-top-width", 140 / 1);
    $('#t .bottom').css("border-bottom-width", 140 / 1);

    $('#u .top').css("border-top-width", 22 / 1);
    $('#u .bottom').css("border-bottom-width", 22 / 1);

    $('#v .top').css("border-top-width", 13 / 2);
    $('#v .bottom').css("border-bottom-width", 13 / 2);

    $('#w .top').css("border-top-width", 20 / 1);
    $('#w .bottom').css("border-bottom-width", 20 / 1);

    $('#x .top').css("border-top-width", 1.5 / 1);
    $('#x .bottom').css("border-bottom-width", 1.5 / 1);

    $('#y .top').css("border-top-width", 19 / 1);
    $('#y .bottom').css("border-bottom-width", 19 / 1);

    $('#z .top').css("border-top-width", 2 / 3);
    $('#z .bottom').css("border-bottom-width", 2 / 3);

    status = 'grown';
    console.log(status)
})

$('#lighthouse').click(function(){

    $('#a .top').css("border-top-width", 26 / 2);
    $('#a .bottom').css("border-bottom-width", 26 / 2);

    $('#b .top').css("border-top-width", 5 / 3);
    $('#b .bottom').css("border-bottom-width", 5 / 3);

    $('#c .top').css("border-top-width", 9 / 2);
    $('#c .bottom').css("border-bottom-width", 9 / 2);

    $('#d .top').css("border-top-width", 12 / 2);
    $('#d .bottom').css("border-bottom-width", 12 / 2);

    $('#e .top').css("border-top-width", 38 / 3);
    $('#e .bottom').css("border-bottom-width", 38 / 3);

    $('#f .top').css("border-top-width", 9 / 2);
    $('#f .bottom').css("border-bottom-width", 9 / 2);

    $('#g .top').css("border-top-width", 10 / 3);
    $('#g .bottom').css("border-bottom-width", 10 / 3);

    $('#h .top').css("border-top-width", 17 / 1);
    $('#h .bottom').css("border-bottom-width", 17 / 1);

    $('#i .top').css("border-top-width", 25 / 2);
    $('#i .bottom').css("border-bottom-width", 25 / 2);

    $('#j .top').css("border-top-width", 2 / 2);
    $('#j .bottom').css("border-bottom-width", 2 / 2);

    $('#k .top').css("border-top-width", 3 / 1);
    $('#k .bottom').css("border-bottom-width", 3 / 1);

    $('#l .top').css("border-top-width", 12 / 1);
    $('#l .bottom').css("border-bottom-width", 12 / 1);

    $('#m .top').css("border-top-width", 10 / 1);
    $('#m .bottom').css("border-bottom-width", 10 / 1);

    $('#n .top').css("border-top-width", 21 / 2);
    $('#n .bottom').css("border-bottom-width", 21 / 2);

    $('#o .top').css("border-top-width", 15 / 2);
    $('#o .bottom').css("border-bottom-width", 15 / 2);

    $('#p .top').css("border-top-width", 7 / 2);
    $('#p .bottom').css("border-bottom-width", 7 / 2);

    $('#q .top').css("border-top-width", 3 / 2);
    $('#q .bottom').css("border-bottom-width", 3 / 2);

    $('#r .top').css("border-top-width", 24 / 2);
    $('#r .bottom').css("border-bottom-width", 24 / 2);

    $('#s .top').css("border-top-width", 24 / 3);
    $('#s .bottom').css("border-bottom-width", 24 / 3);

    $('#t .top').css("border-top-width", 24 / 1);
    $('#t .bottom').css("border-bottom-width", 24 / 1);

    $('#u .top').css("border-top-width", 7 / 1);
    $('#u .bottom').css("border-bottom-width", 7 / 1);

    $('#v .top').css("border-top-width", 5 / 2);
    $('#v .bottom').css("border-bottom-width", 5 / 2);

    $('#w .top').css("border-top-width", 5 / 1);
    $('#w .bottom').css("border-bottom-width", 5 / 1);

    $('#x .top').css("border-top-width", 1.5 / 1);
    $('#x .bottom').css("border-bottom-width", 1.5 / 1);

    $('#y .top').css("border-top-width", 5 / 1);
    $('#y .bottom').css("border-bottom-width", 5 / 1);

    $('#z .top').css("border-top-width", 4 / 3);
    $('#z .bottom').css("border-bottom-width", 4 / 3);

    status = 'grown';
    console.log(status)
})

$('#construction').click(function(){

    $('#a .top').css("border-top-width", 19 / 2);
    $('#a .bottom').css("border-bottom-width", 19 / 2);

    $('#b .top').css("border-top-width", 5 / 3);
    $('#b .bottom').css("border-bottom-width", 5 / 3);

    $('#c .top').css("border-top-width", 8 / 2);
    $('#c .bottom').css("border-bottom-width", 8 / 2);

    $('#d .top').css("border-top-width", 12 / 2);
    $('#d .bottom').css("border-bottom-width", 12 / 2);

    $('#e .top').css("border-top-width", 35 / 3);
    $('#e .bottom').css("border-bottom-width", 35 / 3);

    $('#f .top').css("border-top-width", 5 / 2);
    $('#f .bottom').css("border-bottom-width", 5 / 2);

    $('#g .top').css("border-top-width", 4 / 3);
    $('#g .bottom').css("border-bottom-width", 4 / 3);

    $('#h .top').css("border-top-width", 7 / 1);
    $('#h .bottom').css("border-bottom-width", 7 / 1);

    $('#i .top').css("border-top-width", 15 / 2);
    $('#i .bottom').css("border-bottom-width", 15 / 2);

    $('#j .top').css("border-top-width", 2 / 2);
    $('#j .bottom').css("border-bottom-width", 2 / 2);

    $('#k .top').css("border-top-width", 1 / 1);
    $('#k .bottom').css("border-bottom-width", 1 / 1);

    $('#l .top').css("border-top-width", 5 / 1);
    $('#l .bottom').css("border-bottom-width", 5 / 1);

    $('#m .top').css("border-top-width", 5 / 1);
    $('#m .bottom').css("border-bottom-width", 5 / 1);

    $('#n .top').css("border-top-width", 15 / 2);
    $('#n .bottom').css("border-bottom-width", 15 / 2);

    $('#o .top').css("border-top-width", 11 / 2);
    $('#o .bottom').css("border-bottom-width", 11 / 2);

    $('#p .top').css("border-top-width", 5 / 2);
    $('#p .bottom').css("border-bottom-width", 5 / 2);

    $('#q .top').css("border-top-width", 3 / 2);
    $('#q .bottom').css("border-bottom-width", 3 / 2);

    $('#r .top').css("border-top-width", 14 / 2);
    $('#r .bottom').css("border-bottom-width", 14 / 2);

    $('#s .top').css("border-top-width", 17 / 3);
    $('#s .bottom').css("border-bottom-width", 17 / 3);

    $('#t .top').css("border-top-width", 20 / 1);
    $('#t .bottom').css("border-bottom-width", 20 / 1);

    $('#u .top').css("border-top-width", 9 / 1);
    $('#u .bottom').css("border-bottom-width", 9 / 1);

    $('#v .top').css("border-top-width", 3 / 2);
    $('#v .bottom').css("border-bottom-width", 3 / 2);

    $('#w .top').css("border-top-width", 2 / 1);
    $('#w .bottom').css("border-bottom-width", 2 / 1);

    $('#x .top').css("border-top-width", 1.5 / 1);
    $('#x .bottom').css("border-bottom-width", 1.5 / 1);

    $('#y .top').css("border-top-width", 5 / 1);
    $('#y .bottom').css("border-bottom-width", 5 / 1);

    $('#z .top').css("border-top-width", 3 / 3);
    $('#z .bottom').css("border-bottom-width", 3 / 3);

    status = 'grown';
    console.log(status)
})

$('#about').click(function(){

    $('#a .top').css("border-top-width", 31 / 2);
    $('#a .bottom').css("border-bottom-width", 31 / 2);

    $('#b .top').css("border-top-width", 3 / 3);
    $('#b .bottom').css("border-bottom-width", 3 / 3);

    $('#c .top').css("border-top-width", 12 / 2);
    $('#c .bottom').css("border-bottom-width", 12 / 2);

    $('#d .top').css("border-top-width", 19 / 2);
    $('#d .bottom').css("border-bottom-width", 19 / 2);

    $('#e .top').css("border-top-width", 57 / 3);
    $('#e .bottom').css("border-bottom-width", 57 / 3);

    $('#f .top').css("border-top-width", 11 / 2);
    $('#f .bottom').css("border-bottom-width", 11 / 2);

    $('#g .top').css("border-top-width", 11 / 3);
    $('#g .bottom').css("border-bottom-width", 11 / 3);

    $('#h .top').css("border-top-width", 21 / 1);
    $('#h .bottom').css("border-bottom-width", 21 / 1);

    $('#i .top').css("border-top-width", 24 / 2);
    $('#i .bottom').css("border-bottom-width", 24 / 2);

    $('#j .top').css("border-top-width", 2 / 2);
    $('#j .bottom').css("border-bottom-width", 2 / 2);

    $('#k .top').css("border-top-width", 3 / 1);
    $('#k .bottom').css("border-bottom-width", 3 / 1);

    $('#l .top').css("border-top-width", 17 / 1);
    $('#l .bottom').css("border-bottom-width", 17 / 1);

    $('#m .top').css("border-top-width", 8 / 1);
    $('#m .bottom').css("border-bottom-width", 8 / 1);

    $('#n .top').css("border-top-width", 21 / 2);
    $('#n .bottom').css("border-bottom-width", 21 / 2);

    $('#o .top').css("border-top-width", 25 / 2);
    $('#o .bottom').css("border-bottom-width", 25 / 2);

    $('#p .top').css("border-top-width", 14 / 2);
    $('#p .bottom').css("border-bottom-width", 14 / 2);

    $('#q .top').css("border-top-width", 2 / 2);
    $('#q .bottom').css("border-bottom-width", 2 / 2);

    $('#r .top').css("border-top-width", 27 / 2);
    $('#r .bottom').css("border-bottom-width", 27 / 2);

    $('#s .top').css("border-top-width", 36 / 3);
    $('#s .bottom').css("border-bottom-width", 36 / 3);

    $('#t .top').css("border-top-width", 24 / 1);
    $('#t .bottom').css("border-bottom-width", 24 / 1);

    $('#u .top').css("border-top-width", 10 / 1);
    $('#u .bottom').css("border-bottom-width", 10 / 1);

    $('#v .top').css("border-top-width", 4 / 2);
    $('#v .bottom').css("border-bottom-width", 4 / 2);

    $('#w .top').css("border-top-width", 2 / 1);
    $('#w .bottom').css("border-bottom-width", 2 / 1);

    $('#x .top').css("border-top-width", 3 / 1);
    $('#x .bottom').css("border-bottom-width", 3 / 1);

    $('#y .top').css("border-top-width", 6 / 1);
    $('#y .bottom').css("border-bottom-width", 6 / 1);

    $('#z .top').css("border-top-width", 3 / 3);
    $('#z .bottom').css("border-bottom-width", 3 / 3);

    $('#1 .top').css("border-top-width", 2 * 1.5 / 2);
    $('#1 .bottom').css("border-bottom-width", 2 * 1.5 / 2);

    $('#2 .top').css("border-top-width", 4 / 3);
    $('#2 .bottom').css("border-bottom-width", 4 / 3);

    $('#3 .top').css("border-top-width", 4 / 3);
    $('#3 .bottom').css("border-bottom-width", 4 / 3);

    $('#4 .top').css("border-top-width", 1 / 1);
    $('#4 .bottom').css("border-bottom-width", 1 / 1);

    $('#5 .top').css("border-top-width", 3 / 3);
    $('#5 .bottom').css("border-bottom-width", 3 / 3);

    $('#6 .top').css("border-top-width", 4 / 3);
    $('#6 .bottom').css("border-bottom-width", 4 / 3);

    $('#7 .top').css("border-top-width", 1 / 1);
    $('#7 .bottom').css("border-bottom-width", 1 / 1);

    $('#8 .top').css("border-top-width", 4 / 3);
    $('#8 .bottom').css("border-bottom-width", 4 / 3);

    $('#9 .top').css("border-top-width", 4 / 3);
    $('#9 .bottom').css("border-bottom-width", 4 / 3);

    $('#0 .top').css("border-top-width", 3 / 2);
    $('#0 .bottom').css("border-bottom-width", 3 / 2);

    status = 'grown';
    console.log(status)
})

$('#reset').click(function(){
  $('.top').css("border-top-width", 1);
  $('.bottom').css("border-bottom-width", 1);

  status = 'notgrown';
})

$('#measura').click(function(){
  $('.top').css("border-top-width", 1);
  $('.bottom').css("border-bottom-width", 1);

  status = 'notgrown';
})
})
