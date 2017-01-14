function myFunction() {

  // Counters
  var i = 0;
  var y = 0;
  
  // Array that holds the number of times each vowel appears. Initialized at 0
  var numOf = [0, 0, 0, 0, 0];
  
  // Array that holds our five vowels
  var vowelArray = ["a", "e", "i", "o", "u"];

  // Pop up box prompting user to type a word of phrase. Input standardized to lower case
  var myString = prompt("Type Something").toLowerCase();

  // Variable that holds the array length, for iteration purposes
  var z = myString.length;

  // Loop to select which vowel to use to compare to the characters of the string. Vowels are indexed from 0 (A) to 4 (U)
  
  for (y = 0; y < 5; y++) {
  
  // Loop to check each character of the word or phrase against each vowel
    
    for (i = 0; i < z; i++) {
      if (myString.charAt(i) === vowelArray[y]) {
        numOf[y] = numOf[y] + 1;
      }  // Close if conditional
    }  // Close second for loop
  }  // Close first for loop
  
  // Define outputs to write to document
  document.getElementById("phrase").innerHTML = myString;
  document.getElementById("as").innerHTML = numOf[0];
  document.getElementById("es").innerHTML = numOf[1];
  document.getElementById("is").innerHTML = numOf[2];
  document.getElementById("os").innerHTML = numOf[3];
  document.getElementById("us").innerHTML = numOf[4];
  
}; // Close function