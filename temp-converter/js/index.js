$(document).ready(function(){

var total = 0;


// button function

$('#submit').click(enter);

function enter() {

  var entry = $('#celsius').val();
  var temp = convertTemp(entry);

// total += entry;  

$('#result').html (convertTemp(total));
 	// get total and change value in that container in html
  
$('#celsius').val('');

}


// convert to farenheit

function convertTemp(number) {

	// total = entry * 1.8 + 32;
	// $(#result).text(total);

  var temp = parseFloat(number);
  temp = entry * 1.8 + 32; 
  return temp;

}

// function plusFive(){
	// total = total + 5;
	// $('#result').text(total);
// }