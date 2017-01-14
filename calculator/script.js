// This is what shows in the calc window
var result = "";

// Every time you click on a number or an operator it adds the text of the div clicked to the results variable, using the concat method
$("div.num, div.oper").click(function() {
        result = result.concat(($(this).text()));

// Shows the value of results in the calc window every time a number or operator is clicked  
  document.getElementById("result").innerHTML =  result;          
     });

// When equal is clicked it evaluates the result string as if it where a mathematical operation, using the eval method. It then assigns the total to results and turns it to a string again, so that you can continue to perform operations on that number
$("div#equal").click(function() {
        document.getElementById("result").innerHTML = (eval(result));      
        result = eval(result);
        result = result.toString();
      });
// When clear is clicked it asigns an empty string value to result, so we can start again, and displays zero on the calc window
$("div#clear").click(function() {
  result = "";
  document.getElementById("result").innerHTML = 0;
});
