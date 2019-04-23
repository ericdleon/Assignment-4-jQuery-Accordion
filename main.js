$(function() {
  
  $('.panel').on('click', function(event) {
    var currentlyClicked = $(this);
    $('.panel').not(this).find('p').removeClass('show');
     $(this).find('p').toggleClass('show');
   });
 
 });