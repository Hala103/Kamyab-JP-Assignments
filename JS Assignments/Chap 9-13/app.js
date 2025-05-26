// **********************Chapter 9-11*******************


// let city = prompt("Enter your City name:");
// if (city == "karachi") {
//     alert("Welcome to city of lights");
// };




// let gender = prompt("Enter your gender");
// if (gender == "male") {
//     alert("Good Morning Sir");
// } else {
//     alert ("Good Morning Ma'am");
// };




// let signal_color = prompt("Please, tell us your color of signal:");
// if (signal_color == "red") {
//     alert("Must stop");
// } if(signal_color == "yellow") {
//     alert("Ready to move");
// } if (signal_color == "green") {
//     alert ("Move now");
// };



// let current_fuel = +prompt("Enter remaining fuel(litres) in your car");
// if (current_fuel < 0.25) {
//     alert("Please, refill the fuel in your car");
// };




// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }                                                       
// output: message displayed


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// output: message not displayed


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// output 1: Condition 2 is true
// output 2: Condition 4 is true


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// output: message displayed


// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// output: True


// if("car" < "cat"){
// alert("car is smaller than cat");
// }
// output: car is smaller than cat




// document.writeln("<b>Marks Sheet</b> <br><br>")
// let total_marks = +prompt("Enter your total marks");
// document.writeln("Total Marks : " + total_marks + "<br>")

// let english = +prompt("Enter your English obtained marks");
// let urdu = +prompt ("Enter your Urdu obtained marks");
// let maths = +prompt ("Enter your Maths obtained marks");
// document.writeln("Marks Obtained : " + (english + urdu + maths) + "<br>")

// var percentage = (english + urdu + maths) / total_marks * 100
// document.writeln("Percentage : " + percentage + "% <br>")

// if (percentage >= 80 ) {
//     document.writeln("Grade : A-one <br> Remarks : Excellent <br>"); 
// } else if (percentage  >= 70 && percentage < 80) {
//     document.writeln("Grade : A <br> Remarks : Good <br>"); 
// } else if (percentage  >= 60 && percentage < 70) {
//     document.writeln("Grade : B <br> Remarks : You need to improve <br>"); 
// } else {
//     document.writeln("Grade : Fail <br> Remarks : Sorry"); 
// }



// var secret_number = 5;
// var guess_number = +prompt("Guess the secret number(from 1-10)");
// if (guess_number === secret_number) {
//     alert("Bingo! Correct answer");
// } else if (guess_number == secret_number-1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, Try again");
// }




// let number = +prompt("Write a number");
// if (number % 3 == 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");
// }



// let number = +prompt("Write a number");
// if (number % 2 == 0) {
//     alert(number + " is even number");
// } else {
//     alert(number + " is odd number");
// }




// let temperature = +prompt("Enter the current temperature of your area");
// if (temperature > 40) {
//     alert("Its too hot outside");
// } if ( temperature > 30 && temperature < 40) {
//     alert("The weather today is Normal");
// } if ( temperature > 20 && temperature < 30) {
//     alert("Today's Weather is cool");
// } if (temperature > 10 && temperature < 20) {
//     alert("OMG! Today's weather is so Cool");
// }




// var firstNumber = +prompt("Enter the first number");
// var secondNumber = +prompt("Enter the second number");
// var operation = prompt("Enter the operation");
// if ( operation == "+") {
//     document.writeln("Result is: " + (firstNumber + secondNumber));
// } if  ( operation == "-") {
//     document.writeln("Result is: " + (firstNumber - secondNumber));
// } if  ( operation == "*") {
//     document.writeln("Result is: " + (firstNumber * secondNumber));
// } if  ( operation == "/") {
//     document.writeln("Result is: " + (firstNumber / secondNumber));
// } if  ( operation == "%") {
//     document.writeln("Result is: " + (firstNumber % secondNumber));
// }




// ***********************chapter12-13**************


// var a = +prompt("Enter the first number");
// var b = +prompt("Enter the first number");

// if (a > 0 && b > 0 && a > b) {
//     document.writeln("The larger number is " + a );
//   } else if (a > 0 && b > 0 && a < b) {
//     document.writeln("The larger number is " + b);
//   } else if ( a > 0 && b > 0 && a === b ) {
//     document.writeln("Both numbers are equal!")
//   } else {
//       document.writeln("Please enter an integer");
//   }






// var number = +prompt("Enter the number");
// if (number > 0) {
//     document.writeln (number + " is positive");
// }  else if (number < 0 ) {
//     document.writeln (number + " is negative");
// } else {
//     document.writeln (number + " is zero");
// }





// var returns;
// var character = prompt("Enter a character(a-z)");
// if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//     returns = "true";
// } else {
//     returns = "false";
// }
// console.log(returns);





// var correct_password = "password2000"
// var guess_password = prompt("Enter your password");
// if (guess_password == "") {
//     alert("Please Enter your password");
// } else if (guess_password == correct_password) {
//     alert("“Correct! The password you entered matches the original password”.")
// } else  {
//     alert("Incorrect password");
// }





// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }
// alert(greeting);





//   var time = +prompt("Enter time in 24-hour clock format (e.g. 1900)");
//   if (time >= 0000 && time < 1200) {
//     alert("Good Morning!")
//   } if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!")
//   } if (time >= 1700 && time < 2100) {
//     alert("Good Evening!")
//   } if (time >= 2100 && time <= 2359) {
//     alert("Good night!")
//   }

















