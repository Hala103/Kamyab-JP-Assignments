//  var today = new Date();
//  document.writeln(today);





// var firstname = prompt("Write your first name");
// var lastname = prompt("Write your lastname");

// function greetings(firstname,lastname){
//     alert(`Welcome ${firstname} ${lastname}`);
// }

// greetings(firstname, lastname);





// var num1 = +prompt("Write a first number");
// var num2 = +prompt("Write the second number");

// function sum (num1, num2) {
//     var add = num1 + num2
//     return add;
// }

//  var Sum  = sum(num1, num2);
//  document.writeln(`Sum of ${num1} and ${num2} is ${Sum}`);






// var num1 = +prompt("Write a first number");
// var num2 = +prompt("Write the second number");
// var operator = prompt("Tell us the operation u want to perform(+, -, *, /)");

// function calculate (num1, num2, operator) {
//     var calc;
//     if (operator == "+") {
//         calc = num1 + num2;
//     } else if (operator == "-") {
//         calc = num1-num2;
//     } else if (operator == "*") {
//         calc = num1 * num2;
//     } else if (operator == "/") {
//         calc = num1 / num2;
//     } else {
//         calc= "invalid";
//     }
    
//     return calc;
// }

//  var task  = calculate(num1, num2, operator);
//  document.writeln(`Desired operation for ${num1} and ${num2} is ${task}`);








// function squares (num) {
//     document.writeln(`Square of  ${num} is ${num * num} <br>`);
// }
// squares(2);
// squares(4);
// squares(3);






// var num = +prompt("Write a number");
// function factorial (num) {
//     if(num < 0) {
//         document.writeln(`The factorial of negative integer doesn't exist`);
//     } else if ( num == 0) {
//         document.writeln(`The factorial of ${num} is 1`);
//     } else {
//         var factorialnum = 1;
//         for (i = 1; i<= num; i++) {
//             factorialnum = factorialnum * i;
//         }
       
//     }
//     return factorialnum;

// }
// var fact = factorial(num);
//  document.writeln(`The factorial of ${num} is ${fact}`);







// var num1 = +prompt("Write the first positive number");
// var num2 = +prompt("Write the second positive number");

// function counting(){
// var count;
// for (var i = num1; i <= num2; i++) {
//     count = i;
//     document.writeln(`${count} <br>`);
// }
// }
// counting();






// var rightSide;
// function calculateHypo (base, perpendicular) {


//  function calculateSquare (a) {
//     rightSide = a * a;
//     return rightSide;
//  }  
// var RHS = calculateSquare(base) + calculateSquare(perpendicular);
// var hypo = Math.sqrt(RHS);
//     return hypo;
// }

// var hypotenuse = calculateHypo(2, 3);
// document.writeln(`The hypotenuse of triangle is ${hypotenuse}`);







// var area;
// function calcArea(width, height) {
//     area = width * height;
//     return area;
// }
// var area1 = calcArea(3, 6);
// document.writeln(`Total area is ${area1}`)

// ***************************AS A VARIABLE**************************

// var userwidth = +prompt("Write the width");
// var userheight = +prompt("Write the height");
// var area2 = calcArea(userwidth, userheight);
// document.writeln(`Total area is ${area2}`);







// function uppercase(str) {
//     var strToArr = str.split(" ");
 
//     for(var i=  0; i < strToArr.length; i++) {
//         strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
// }
//     var titlecase = strToArr.join(" ");
//     return titlecase;
// }
// var capitalized = uppercase("the quick brown fox");
// document.writeln(capitalized);







// function longestword(str) {

// var strToArr = str.split(" ");
// var longest = "";

// for (var i = 0; i< strToArr.length; i++) {
    
//     if(strToArr[i].length > longest.length) {
//         longest = strToArr[i];
//     }
// }
//         return longest;
// }
// var newWord = longestword("Web Development Tutorial");
// document.writeln(`Longest word is ${newWord}`);








// function count (str, letter) {
// var letterCount = 0;
//     for(var i = 0; i < str.length; i++) {
//          if(str[i].toLowerCase() == letter.toLowerCase()) {
//          letterCount++;
//     }
// }
//         return letterCount;
       
// }
// var totalCount = count("JSResourceS.com", "s")
// document.writeln(`The number of occurence  in a string is ${totalCount} times`)







// var circumference;
// function calCircumference(radius){
//     circumference = 2 * Math.PI * radius;
//     return circumference
// }
// var newCircumference = calCircumference(4);
// document.writeln("The Circumference is " + newCircumference.toFixed(2) + "<br>");


// var area;
// function calArea(radius){
//     area =  Math.PI * radius * radius;
//     return area;
// }
// var newArea = calArea(4);
// document.writeln("The Area is " + newArea.toFixed(2));









