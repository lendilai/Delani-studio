$(".clickable").click(function(){
  $(".design-hidden").slideToggle();
  $(".design-showing").slideToggle();
});

$(".clickable2").click(function(){
  $(".development-hidden").slideToggle();
  $(".development-showing").slideToggle();
});

$(".clickable3").click(function(){
  $(".management-hidden").slideToggle();
  $(".management-showing").slideToggle();
});

var key = '1c2089a31a00d28af6cb0e553ed84697-us20';

$("button").click(function(event) {
  event.preventDefault();
  var user = document.getElementById('username').value;
  alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
});

$("button").on('click', function(){
  $('form').each(function(){
    this.reset();
  });
});
