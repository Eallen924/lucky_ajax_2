$(document).ready(function(){
  $('form').on('submit', function(event){
  //   1- intercept the form submission event using jQuery
  event.preventDefault();
  //   2- prevent the default action for that event from happening
  var randomNumber = Math.floor(Math.random()*6)+1;
  //   3- generate a random number between 1 and 6 using JavaScript
  $.post('/rolls', {value: randomNumber}, function(returnedData) {
  //   4- use jQuery to submit an AJAX post to the form's action
    $('#die').html(returnedData);
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
    
  });

  // PSEUDO-CODE:
});
});


// $.post('/rolls', randomNumber, function(returnedData) {
//   alert('we posted')
// });

// $.ajax({
//   type: "POST",
//   url: '/rolls',
//   data: randomNumber,
//   success: success,
//   dataType: dataType
// });
