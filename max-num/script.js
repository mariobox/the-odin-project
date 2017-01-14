function myFunction() {

// Define Variables
var i = 0;
var max = 0;
var n = 0;
var counter = 0;
var element = 0;
var myArray = [];

// Calculate Maximum Number in an Array
function myMax(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

// Load an Array with User Input
n = Number(prompt("How Many Items do you want in the Array?"));

// Ask User for Each Number in Array
for (counter = 0; counter < n; counter++) {
  element = Number(prompt("Give me a number:"));
  myArray.push(element);
 }
 
// Call myMax Function on Recently Created Array
myMax(myArray);

// Print Results in Document
document.getElementById("maxNumber").innerHTML = max;
document.getElementById("fullArray").innerHTML = myArray;
document.getElementById("arrayLength").innerHTML = myArray.length;
  
};