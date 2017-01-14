function myFunction() {

 var myString = prompt("write a phrase");
 var z = myString.length;
 var myNewString = "";
 var i = 0;
  
  for (i = 0; i < z; i++) {
    myNewString += myString.charAt(z - 1 - i);
  }
  document.getElementById("demo").innerHTML = myNewString;
}; // Close function