$(document).ready(
	function(){

/* Prevent Form */

$("#blue-btn").click(function( event ) {
  event.preventDefault();
  alert("This computer will explode if you click ok");
});



/* Read More */

$("#readmore").click(function() {
  $("#show-this-on-click").show();
  $("#readless").show();
  $("#readmore").hide();
  var jump = $(this).attr('href');
    var new_position = $('#'+jump).offset();
    window.scrollTo(new_position.left,new_position.top);
    return false;
 });

$("#readless").click(function() {
  $("#show-this-on-click").hide();
  $("#readmore").show();
  $("#readless").hide();
  var jump = $(this).attr('href');
    var new_position = $('#'+jump).offset();
    window.scrollTo(new_position.left,new_position.top);
    return false;
 });


/* Learn More */

$("#learnmore").click(function() {
  $("#learnmoretext").show();
  $("#learnmore").hide();
 });


});